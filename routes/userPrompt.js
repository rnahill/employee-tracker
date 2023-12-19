const inquirer = require('inquirer');

function userPrompt () {

    const userOptions = [
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
        "Update an employee role"
       ]
    }
]

}

module.exports = { userPrompt };