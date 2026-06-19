// routes/contacts.js
// REST API routes for Contact management (CRUD) - MySQL Version

const express = require('express');
const router = express.Router();
const db = require('../db/database');

// GET /contacts - list all contacts, optionally filtered by search query (?q=)
router.get('/', async (req, res) => {
  try {
    const { q } = req.query;

    let rows;

    if (q) {
      const [result] = await db.execute(
  `SELECT *
   FROM contacts
   WHERE user_id = ?
   AND (name LIKE ? OR phone LIKE ?)
   ORDER BY created_at DESC`,
  [req.user.id, `%${q}%`, `%${q}%`]
);

      rows = result;
    } else {
      const [result] = await db.execute(
  `SELECT *
   FROM contacts
   WHERE user_id = ?
   ORDER BY created_at DESC`,
  [req.user.id]
);

      rows = result;
    }

    res.json(rows);
  } catch (err) {
  console.error('CONTACTS ERROR:', err);

  res.status(500).json({
    error: 'Failed to fetch contacts',
    details: err.message,
    code: err.code
  });
}
});

// GET /contacts/:id - get a single contact
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.execute(
      'SELECT * FROM contacts WHERE id = ? AND user_id = ?',
[req.params.id, req.user.id]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        error: 'Contact not found'
      });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Failed to fetch contact',
      details: err.message
    });
  }
});

// POST /contacts - create a new contact
router.post('/', async (req, res) => {
  try {
    const { name, phone } = req.body;

    const trimmedName = (name || '').trim();
    const trimmedPhone = (phone || '').trim();

    const isNameEmpty = !trimmedName;
    const isPhoneEmpty = !trimmedPhone;

    // Validation
    if (isNameEmpty && isPhoneEmpty) {
      return res.status(400).json({
        error: 'Please enter a valid full name and phone number.'
      });
    }

    if (isNameEmpty) {
      return res.status(400).json({
        error: 'Please enter the full name.'
      });
    }

    if (isPhoneEmpty) {
      return res.status(400).json({
        error: 'Please enter the phone number.'
      });
    }

    if (!/^\d{10}$/.test(trimmedPhone)) {
      return res.status(400).json({
        error: 'Please enter a valid phone number.'
      });
    }

    const [existing] = await db.execute(
      'SELECT id FROM contacts WHERE phone = ?',
      [trimmedPhone]
    );

    if (existing.length > 0) {
      return res.status(409).json({
        error: 'A contact with this phone number already exists'
      });
    }

    const [insertResult] = await db.execute(
      'INSERT INTO contacts (name,phone,user_id) VALUES (?, ?, ?)',
      [trimmedName,trimmedPhone,req.user.id]
    );

    const [newContact] = await db.execute(
      'SELECT * FROM contacts WHERE id = ?',
      [insertResult.insertId]
    );

    res.status(201).json(newContact[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Failed to create contact',
      details: err.message
    });
  }
});

// PUT /contacts/:id - update an existing contact
router.put('/:id', async (req, res) => {
  try {
    const { name, phone } = req.body;
    const { id } = req.params;

    const trimmedName = (name || '').trim();
    const trimmedPhone = (phone || '').trim();

    const isNameEmpty = !trimmedName;
    const isPhoneEmpty = !trimmedPhone;

    const [contactRows] = await db.execute(
  'SELECT * FROM contacts WHERE id = ? AND user_id = ?',
  [id, req.user.id]
);

    if (contactRows.length === 0) {
      return res.status(404).json({
        error: 'Contact not found'
      });
    }

    if (isNameEmpty && isPhoneEmpty) {
      return res.status(400).json({
        error: 'Please enter a valid full name and phone number.'
      });
    }

    if (isNameEmpty) {
      return res.status(400).json({
        error: 'Please enter the full name.'
      });
    }

    if (isPhoneEmpty) {
      return res.status(400).json({
        error: 'Please enter the phone number.'
      });
    }

    if (!/^\d{10}$/.test(trimmedPhone)) {
      return res.status(400).json({
        error: 'Please enter a valid phone number.'
      });
    }

    const [duplicate] = await db.execute(
      `SELECT id
       FROM contacts
       WHERE phone = ?
       AND id != ?`,
      [trimmedPhone, id]
    );

    if (duplicate.length > 0) {
      return res.status(409).json({
        error: 'Another contact already uses this phone number'
      });
    }

    await db.execute(
      `UPDATE contacts
       SET name = ?, phone = ?
       WHERE id = ?`,
      [trimmedName, trimmedPhone, id]
    );

    const [updated] = await db.execute(
  'SELECT * FROM contacts WHERE id = ? AND user_id = ?',
  [id, req.user.id]
);

    res.json(updated[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Failed to update contact',
      details: err.message
    });
  }
});

// DELETE /contacts/:id - delete a contact
router.delete('/:id', async (req, res) => {
  try {

    const [contact] = await db.execute(
  'SELECT * FROM contacts WHERE id = ? AND user_id = ?',
  [req.params.id, req.user.id]
);

    if (contact.length === 0) {
      return res.status(404).json({
        error: 'Contact not found'
      });
    }

    await db.execute(
  'DELETE FROM contacts WHERE id = ? AND user_id = ?',
  [req.params.id, req.user.id]
);

    res.json({
      message: 'Contact deleted successfully'
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Failed to delete contact',
      details: err.message
    });
  }
});

module.exports = router;