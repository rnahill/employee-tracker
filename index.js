const inquirer = require('inquirer');

const { table } = require('table');

const mysql = require('mysql2/promise');

let db = null;

const init = async () => {

db = await mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'neatdude',
      database: 'db_name' //
    },
  );
  console.log(`Connected to the database_name database.`)

    // use inquirer

    //use prepared_statement

    const results = await db.query("SELECT * FROM table_name;");
  
  // get data from results;
  const data = results[0];
  console.log(data);

  // table module
  const arrOfArr = data.map( row => Object.values(row));
  // add column names
  arrOfArr.unshift(["id", "name"]);
  // print table
  console.log(table(arrOfArr));
}


init();