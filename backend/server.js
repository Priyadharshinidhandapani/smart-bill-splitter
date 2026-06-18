require('dotenv').config();

const express = require('express');
const cors = require('cors');

const pool = require('./db/database');

const contactsRouter = require('./routes/contacts');
const billsRouter = require('./routes/bills');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.originalUrl}`);
  next();
});

app.get('/', (req, res) => {
  res.json({
    message: 'Smart Bill Splitter API is running'
  });
});

app.use('/contacts', contactsRouter);
app.use('/bills', billsRouter);

app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found'
  });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    error: 'Internal server error'
  });
});

app.listen(PORT, async () => {
  try {
    const conn = await pool.getConnection();
    console.log('MySQL Connected Successfully');
    conn.release();
  } catch (err) {
    console.error('MySQL Connection Failed:', err.message);
  }

  console.log(`Smart Bill Splitter backend running at http://localhost:${PORT}`);
});