// routes/contacts.js
// REST API routes for Contact management (CRUD)

const express = require('express');
const router = express.Router();
const db = require('../db/database');

// GET /contacts - list all contacts, optionally filtered by search query (?q=)
router.get('/', (req, res) => {
  try {
    const { q } = req.query;
    let rows;
    if (q) {
      const stmt = db.prepare(
        `SELECT * FROM contacts WHERE name LIKE ? OR phone LIKE ? ORDER BY created_at DESC`
      );
      rows = stmt.all(`%${q}%`, `%${q}%`);
    } else {
      rows = db.prepare('SELECT * FROM contacts ORDER BY created_at DESC').all();
    }
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch contacts', details: err.message });
  }
});

// GET /contacts/:id - get a single contact
router.get('/:id', (req, res) => {
  try {
    const contact = db.prepare('SELECT * FROM contacts WHERE id = ?').get(req.params.id);
    if (!contact) return res.status(404).json({ error: 'Contact not found' });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch contact', details: err.message });
  }
});

// POST /contacts - create a new contact
router.post('/', (req, res) => {
  try {
    const { name, phone } = req.body;

    const trimmedName = (name || '').trim();
    const trimmedPhone = (phone || '').trim();
    const isNameEmpty = !trimmedName;
    const isPhoneEmpty = !trimmedPhone;

    // Validation (mirrors the frontend validation rules)
    if (isNameEmpty && isPhoneEmpty) {
      return res.status(400).json({ error: 'Please enter a valid full name and phone number.' });
    }
    if (isNameEmpty) {
      return res.status(400).json({ error: 'Please enter the full name.' });
    }
    if (isPhoneEmpty) {
      return res.status(400).json({ error: 'Please enter the phone number.' });
    }
    if (!/^\d{10}$/.test(trimmedPhone)) {
      return res.status(400).json({ error: 'Please enter a valid phone number.' });
    }

    const existing = db.prepare('SELECT id FROM contacts WHERE phone = ?').get(trimmedPhone);
    if (existing) {
      return res.status(409).json({ error: 'A contact with this phone number already exists' });
    }

    const stmt = db.prepare('INSERT INTO contacts (name, phone) VALUES (?, ?)');
    const result = stmt.run(trimmedName, trimmedPhone);
    const newContact = db.prepare('SELECT * FROM contacts WHERE id = ?').get(result.lastInsertRowid);

    res.status(201).json(newContact);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create contact', details: err.message });
  }
});

// PUT /contacts/:id - update an existing contact
router.put('/:id', (req, res) => {
  try {
    const { name, phone } = req.body;
    const { id } = req.params;

    const contact = db.prepare('SELECT * FROM contacts WHERE id = ?').get(id);
    if (!contact) return res.status(404).json({ error: 'Contact not found' });

    const trimmedName = (name || '').trim();
    const trimmedPhone = (phone || '').trim();
    const isNameEmpty = !trimmedName;
    const isPhoneEmpty = !trimmedPhone;

    if (isNameEmpty && isPhoneEmpty) {
      return res.status(400).json({ error: 'Please enter a valid full name and phone number.' });
    }
    if (isNameEmpty) {
      return res.status(400).json({ error: 'Please enter the full name.' });
    }
    if (isPhoneEmpty) {
      return res.status(400).json({ error: 'Please enter the phone number.' });
    }
    if (!/^\d{10}$/.test(trimmedPhone)) {
      return res.status(400).json({ error: 'Please enter a valid phone number.' });
    }

    const duplicate = db
      .prepare('SELECT id FROM contacts WHERE phone = ? AND id != ?')
      .get(trimmedPhone, id);
    if (duplicate) {
      return res.status(409).json({ error: 'Another contact already uses this phone number' });
    }

    db.prepare('UPDATE contacts SET name = ?, phone = ? WHERE id = ?').run(
      trimmedName,
      trimmedPhone,
      id
    );

    const updated = db.prepare('SELECT * FROM contacts WHERE id = ?').get(id);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update contact', details: err.message });
  }
});

// DELETE /contacts/:id - delete a contact
router.delete('/:id', (req, res) => {
  try {
    const contact = db.prepare('SELECT * FROM contacts WHERE id = ?').get(req.params.id);
    if (!contact) return res.status(404).json({ error: 'Contact not found' });

    db.prepare('DELETE FROM contacts WHERE id = ?').run(req.params.id);
    res.json({ message: 'Contact deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete contact', details: err.message });
  }
});

module.exports = router;