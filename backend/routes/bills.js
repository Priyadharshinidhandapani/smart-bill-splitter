const express = require('express');
const router = express.Router();
const pool = require('../db/database');

const VALID_METHODS = ['contacts', 'shares', 'percentage'];

/*
|--------------------------------------------------------------------------
| GET ALL BILLS
|--------------------------------------------------------------------------
*/
router.get('/', async (req, res) => {
  try {
    const { q, sort } = req.query;

    let bills;

    if (q) {
      const [rows] = await pool.query(
        `
        SELECT DISTINCT b.*
        FROM bills b
        LEFT JOIN bill_participants p ON p.bill_id = b.id
        WHERE p.participant_name LIKE ?
           OR b.split_method LIKE ?
           OR CAST(b.bill_amount AS CHAR) LIKE ?
        ORDER BY b.created_at ${sort === 'asc' ? 'ASC' : 'DESC'}
        `,
        [`%${q}%`, `%${q}%`, `%${q}%`]
      );

      bills = rows;
    } else {
      const [rows] = await pool.query(
        `
        SELECT *
        FROM bills
        ORDER BY created_at ${sort === 'asc' ? 'ASC' : 'DESC'}
        `
      );

      bills = rows;
    }

    const billsWithParticipants = [];

    for (const bill of bills) {
      const [participants] = await pool.query(
        'SELECT * FROM bill_participants WHERE bill_id = ?',
        [bill.id]
      );

      billsWithParticipants.push({
        ...bill,
        participants
      });
    }

    res.json(billsWithParticipants);
  } catch (err) {
    res.status(500).json({
      error: 'Failed to fetch bills',
      details: err.message
    });
  }
});

/*
|--------------------------------------------------------------------------
| GET SINGLE BILL
|--------------------------------------------------------------------------
*/
router.get('/:id', async (req, res) => {
  try {
    const [billRows] = await pool.query(
      'SELECT * FROM bills WHERE id = ?',
      [req.params.id]
    );

    if (billRows.length === 0) {
      return res.status(404).json({
        error: 'Bill not found'
      });
    }

    const bill = billRows[0];

    const [participants] = await pool.query(
      'SELECT * FROM bill_participants WHERE bill_id = ?',
      [bill.id]
    );

    res.json({
      ...bill,
      participants
    });
  } catch (err) {
    res.status(500).json({
      error: 'Failed to fetch bill',
      details: err.message
    });
  }
});

/*
|--------------------------------------------------------------------------
| CREATE BILL
|--------------------------------------------------------------------------
*/
router.post('/', async (req, res) => {
  const connection = await pool.getConnection();

  try {
    const { bill_amount, split_method, participants } = req.body;

    const amount = parseFloat(bill_amount);

    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({
        error: 'Bill amount must be greater than zero'
      });
    }

    if (!VALID_METHODS.includes(split_method)) {
      return res.status(400).json({
        error: `Split method must be one of: ${VALID_METHODS.join(', ')}`
      });
    }

    if (!Array.isArray(participants) || participants.length === 0) {
      return res.status(400).json({
        error: 'At least one participant is required'
      });
    }

    for (const p of participants) {
      if (!p.participant_name || !p.participant_name.trim()) {
        return res.status(400).json({
          error: 'Each participant must have a name'
        });
      }

      if (split_method === 'shares') {
        if (
          p.shares === undefined ||
          p.shares === null ||
          isNaN(Number(p.shares)) ||
          Number(p.shares) < 0
        ) {
          return res.status(400).json({
            error: 'Please enter a valid share.'
          });
        }
      }

      if (split_method === 'percentage') {
        if (
          p.percentage === undefined ||
          p.percentage === null ||
          Number(p.percentage) < 0
        ) {
          return res.status(400).json({
            error: 'Percentage value must be zero or greater'
          });
        }
      }
    }

    if (split_method === 'shares') {
      const totalShares = participants.reduce(
        (sum, p) => sum + Number(p.shares),
        0
      );

      if (totalShares <= 0) {
        return res.status(400).json({
          error: 'Please enter a valid share.'
        });
      }
    }

    if (split_method === 'percentage') {
      const totalPercentage = participants.reduce(
        (sum, p) => sum + Number(p.percentage),
        0
      );

      if (Math.abs(totalPercentage - 100) > 0.01) {
        return res.status(400).json({
          error: `Total percentage must equal 100% (currently ${totalPercentage.toFixed(2)}%)`
        });
      }
    }

    let calculatedParticipants;

    if (split_method === 'contacts') {
      const share = amount / participants.length;

      calculatedParticipants = participants.map((p) => ({
        ...p,
        amount: Math.round(share * 100) / 100
      }));
    } else if (split_method === 'shares') {
      const totalShares = participants.reduce(
        (sum, p) => sum + Number(p.shares),
        0
      );

      calculatedParticipants = participants.map((p) => ({
        ...p,
        amount:
          Math.round(
            ((Number(p.shares) / totalShares) * amount) * 100
          ) / 100
      }));
    } else {
      calculatedParticipants = participants.map((p) => ({
        ...p,
        amount:
          Math.round(
            ((Number(p.percentage) / 100) * amount) * 100
          ) / 100
      }));
    }

    await connection.beginTransaction();

    const [billResult] = await connection.query(
      `
      INSERT INTO bills
      (bill_amount, split_method)
      VALUES (?, ?)
      `,
      [amount, split_method]
    );

    const billId = billResult.insertId;

    for (const p of calculatedParticipants) {
      await connection.query(
        `
        INSERT INTO bill_participants
        (
          bill_id,
          participant_name,
          phone,
          shares,
          percentage,
          amount
        )
        VALUES (?, ?, ?, ?, ?, ?)
        `,
        [
          billId,
          p.participant_name.trim(),
          p.phone || null,
          p.shares ?? null,
          p.percentage ?? null,
          p.amount
        ]
      );
    }

    await connection.commit();

    const [savedBillRows] = await pool.query(
      'SELECT * FROM bills WHERE id = ?',
      [billId]
    );

    const [savedParticipants] = await pool.query(
      'SELECT * FROM bill_participants WHERE bill_id = ?',
      [billId]
    );

    res.status(201).json({
      ...savedBillRows[0],
      participants: savedParticipants
    });
  } catch (err) {
    await connection.rollback();

    res.status(500).json({
      error: 'Failed to create bill',
      details: err.message
    });
  } finally {
    connection.release();
  }
});

/*
|--------------------------------------------------------------------------
| DELETE BILL
|--------------------------------------------------------------------------
*/
router.delete('/:id', async (req, res) => {
  try {
    const [billRows] = await pool.query(
      'SELECT * FROM bills WHERE id = ?',
      [req.params.id]
    );

    if (billRows.length === 0) {
      return res.status(404).json({
        error: 'Bill not found'
      });
    }

    await pool.query(
      'DELETE FROM bills WHERE id = ?',
      [req.params.id]
    );

    res.json({
      message: 'Bill deleted successfully'
    });
  } catch (err) {
    res.status(500).json({
      error: 'Failed to delete bill',
      details: err.message
    });
  }
});

module.exports = router;