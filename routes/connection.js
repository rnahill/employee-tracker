require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: process.env.user,    
      password: process.env.password,
      database: process.env.database
    },
    console.log(`Connected to the ${process.env.database} database.`)
  );

module.exports = db;