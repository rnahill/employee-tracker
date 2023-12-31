
const { table } = require('table');

const mysql = require('mysql2/promise');

const db = require("./routes/connection.js");

const inquirer = require('inquirer');

const init = async () => {

  const userPrompt = () => {

      inquirer.prompt([

      {
        type: "list",
        name: "select",
        message: "What would you like to do?",
        choices: [
          "View all departments.",
          "View all roles.",
          "View all employees.",
          "Add a department.",
          "Add a role.",
          "Add an employee.",
          "Update an employee role."
        ]
      }

    ])

    .then((answers) => {
      const {select} = answers;

      switch (select) {
        case "View all departments.":
          console.log("viewing departments");
          break;
        case "View all roles.":
          console.log("viewing all roles");
          break;
        case "View all employees.":
          console.log("viewing all employees");
          break;
        case "Add a department.":
          console.log("adding a department");
          break;
        case "Add a role.":
          console.log('adding a role');
          break;
        case "Add an employee.":
          console.log('adding an employee');
          break;
        case "Update an employee role.":
          console.log('updating an employee role');
          break;
      }

    })

  }

  userPrompt();

}

init();


