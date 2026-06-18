require('dotenv').config();

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  waitForConnections: true,
  connectionLimit: 10
});

console.log('MySQL connection pool created');
console.log('Host:', process.env.MYSQLHOST);
console.log('Port:', process.env.MYSQLPORT);

module.exports = pool;