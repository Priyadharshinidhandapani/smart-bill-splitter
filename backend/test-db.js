require('dotenv').config();
const db = require('./db/database');

async function test() {
  try {
    const [rows] = await db.execute('SELECT NOW() as currentTime');
    console.log(rows);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

test();