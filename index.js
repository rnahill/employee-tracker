
const { table } = require('table');

const mysql = require('mysql2/promise');

const db = require("./routes/connection.js");

const userChoice = require("./routes/userPrompt.js");

const init = async () => {

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