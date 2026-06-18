// db/database.js
// Sets up the SQLite database connection and creates tables automatically
// if they do not already exist. Uses better-sqlite3 for fast synchronous access.

const Database = require('better-sqlite3');
const path = require('path');

// The database file is stored locally inside the backend/db folder.
// This ensures data persists across server restarts.
const dbPath = path.join(__dirname, 'billsplitter.db');
const db = new Database(dbPath);

// Enable foreign key constraints
db.pragma('foreign_keys = ON');

// ---------- TABLE CREATION ----------

// Contacts table: stores reusable contacts for future bill splits
db.exec(`
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL UNIQUE,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )
`);

// Bills table: stores the high level bill record
db.exec(`
  CREATE TABLE IF NOT EXISTS bills (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    bill_amount REAL NOT NULL,
    split_method TEXT NOT NULL CHECK (split_method IN ('contacts', 'shares', 'percentage')),
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )
`);

// BillParticipants table: stores per-participant split details for each bill
db.exec(`
  CREATE TABLE IF NOT EXISTS bill_participants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    bill_id INTEGER NOT NULL,
    participant_name TEXT NOT NULL,
    phone TEXT,
    shares REAL,
    percentage REAL,
    amount REAL NOT NULL,
    FOREIGN KEY (bill_id) REFERENCES bills (id) ON DELETE CASCADE
  )
`);

console.log(`SQLite database ready at: ${dbPath}`);

module.exports = db;
