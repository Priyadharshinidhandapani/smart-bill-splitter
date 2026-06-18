// server.js
// Entry point for the Smart Bill Splitter backend API

const express = require('express');
const cors = require('cors');

// Ensure DB and tables are initialized as soon as the server starts
require('./db/database');

const contactsRouter = require('./routes/contacts');
const billsRouter = require('./routes/bills');

const app = express();
const PORT = process.env.PORT || 3000;

// ---------- Middleware ----------
app.use(cors());
app.use(express.json());

// Simple request logger
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.originalUrl}`);
  next();
});

// ---------- Routes ----------
app.get('/', (req, res) => {
  res.json({ message: 'Smart Bill Splitter API is running' });
});

app.use('/contacts', contactsRouter);
app.use('/bills', billsRouter);

// ---------- 404 Handler ----------
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// ---------- Global Error Handler ----------
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Smart Bill Splitter backend running at http://localhost:${PORT}`);
});
