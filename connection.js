require('dotenv').config();
const mysql = require('mysql2');

// Use environment variables to connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL user
      user: process.env.user,
      // MySQL password     
      password: process.env.password,
      // MySQL databse 
      database: process.env.database
    },
    console.log(`Connected to the ${process.env.database} database.`)
  );

module.exports = db;