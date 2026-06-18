// routes/bills.js
// REST API routes for Bill management (CRUD) including participants

const express = require('express');
const router = express.Router();
const db = require('../db/database');

const VALID_METHODS = ['contacts', 'shares', 'percentage'];

// GET /bills - list all bills with their participants, optional search by ?q=
router.get('/', (req, res) => {
  try {
    const { q, sort } = req.query;

    let bills;
    if (q) {
      bills = db
        .prepare(
          `SELECT DISTINCT b.* FROM bills b
           LEFT JOIN bill_participants p ON p.bill_id = b.id
           WHERE p.participant_name LIKE ? OR b.split_method LIKE ? OR CAST(b.bill_amount AS TEXT) LIKE ?
           ORDER BY b.created_at ${sort === 'asc' ? 'ASC' : 'DESC'}`
        )
        .all(`%${q}%`, `%${q}%`, `%${q}%`);
    } else {
      bills = db
        .prepare(`SELECT * FROM bills ORDER BY created_at ${sort === 'asc' ? 'ASC' : 'DESC'}`)
        .all();
    }

    const participantsStmt = db.prepare('SELECT * FROM bill_participants WHERE bill_id = ?');
    const billsWithParticipants = bills.map((bill) => ({
      ...bill,
      participants: participantsStmt.all(bill.id),
    }));

    res.json(billsWithParticipants);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch bills', details: err.message });
  }
});

// GET /bills/:id - get a single bill with participants
router.get('/:id', (req, res) => {
  try {
    const bill = db.prepare('SELECT * FROM bills WHERE id = ?').get(req.params.id);
    if (!bill) return res.status(404).json({ error: 'Bill not found' });

    const participants = db
      .prepare('SELECT * FROM bill_participants WHERE bill_id = ?')
      .all(bill.id);

    res.json({ ...bill, participants });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch bill', details: err.message });
  }
});

// POST /bills - create a new bill with participants (transactional)
router.post('/', (req, res) => {
  try {
    const { bill_amount, split_method, participants } = req.body;

    // ---- Validation ----
    const amount = parseFloat(bill_amount);
    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: 'Bill amount must be greater than zero' });
    }

    if (!VALID_METHODS.includes(split_method)) {
      return res
        .status(400)
        .json({ error: `Split method must be one of: ${VALID_METHODS.join(', ')}` });
    }

    if (!Array.isArray(participants) || participants.length === 0) {
      return res.status(400).json({ error: 'At least one participant is required' });
    }

    for (const p of participants) {
      if (!p.participant_name || !p.participant_name.trim()) {
        return res.status(400).json({ error: 'Each participant must have a name' });
      }
      if (split_method === 'shares') {
        if (p.shares === undefined || p.shares === null || isNaN(Number(p.shares)) || Number(p.shares) < 0) {
          return res.status(400).json({ error: 'Please enter a valid share.' });
        }
      }
      if (split_method === 'percentage') {
        if (p.percentage === undefined || p.percentage === null || Number(p.percentage) < 0) {
          return res.status(400).json({ error: 'Percentage value must be zero or greater' });
        }
      }
    }

    if (split_method === 'shares') {
      const totalShares = participants.reduce((sum, p) => sum + Number(p.shares), 0);
      if (totalShares <= 0) {
        return res.status(400).json({ error: 'Please enter a valid share.' });
      }
    }

    if (split_method === 'percentage') {
      const totalPercentage = participants.reduce((sum, p) => sum + Number(p.percentage), 0);
      // Allow tiny floating point tolerance
      if (Math.abs(totalPercentage - 100) > 0.01) {
        return res.status(400).json({
          error: `Total percentage must equal 100% (currently ${totalPercentage.toFixed(2)}%)`,
        });
      }
    }

    // ---- Calculate amounts server-side (authoritative) ----
    let calculatedParticipants;
    if (split_method === 'contacts') {
      const share = amount / participants.length;
      calculatedParticipants = participants.map((p) => ({
        ...p,
        amount: Math.round(share * 100) / 100,
      }));
    } else if (split_method === 'shares') {
      const totalShares = participants.reduce((sum, p) => sum + Number(p.shares), 0);
      calculatedParticipants = participants.map((p) => ({
        ...p,
        amount: Math.round(((Number(p.shares) / totalShares) * amount) * 100) / 100,
      }));
    } else {
      // percentage
      calculatedParticipants = participants.map((p) => ({
        ...p,
        amount: Math.round(((Number(p.percentage) / 100) * amount) * 100) / 100,
      }));
    }

    // ---- Insert bill + participants in a transaction ----
    const insertBill = db.prepare(
      'INSERT INTO bills (bill_amount, split_method) VALUES (?, ?)'
    );
    const insertParticipant = db.prepare(
      `INSERT INTO bill_participants (bill_id, participant_name, phone, shares, percentage, amount)
       VALUES (?, ?, ?, ?, ?, ?)`
    );

    const createBillTransaction = db.transaction(() => {
      const billResult = insertBill.run(amount, split_method);
      const billId = billResult.lastInsertRowid;

      for (const p of calculatedParticipants) {
        insertParticipant.run(
          billId,
          p.participant_name.trim(),
          p.phone || null,
          p.shares !== undefined ? Number(p.shares) : null,
          p.percentage !== undefined ? Number(p.percentage) : null,
          p.amount
        );
      }
      return billId;
    });

    const billId = createBillTransaction();

    const savedBill = db.prepare('SELECT * FROM bills WHERE id = ?').get(billId);
    const savedParticipants = db
      .prepare('SELECT * FROM bill_participants WHERE bill_id = ?')
      .all(billId);

    res.status(201).json({ ...savedBill, participants: savedParticipants });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create bill', details: err.message });
  }
});

// DELETE /bills/:id - delete a bill (cascades to participants)
router.delete('/:id', (req, res) => {
  try {
    const bill = db.prepare('SELECT * FROM bills WHERE id = ?').get(req.params.id);
    if (!bill) return res.status(404).json({ error: 'Bill not found' });

    db.prepare('DELETE FROM bills WHERE id = ?').run(req.params.id);
    res.json({ message: 'Bill deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete bill', details: err.message });
  }
});

module.exports = router;