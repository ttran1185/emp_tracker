const connect = require("./DB/db.js");
const inquirer = require("inquirer");
const mysql = require("mysql");
const { fuchsia } = require("color-name");

const start = function() {
    inquirer.prompt({
        type: "list",
        name: "Options",
        message: "Please choose an option.",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add an employee",
            "Add a department",
            "Add a role",
            "Update an employee",
        ]
    }).then(function (answer) {
        switch (answer.Options) {
            case "View all departments":
                viewDepartments();
                break;
            case "View all roles":
                viewRoles();
                break;
            case "View all employees":
                viewEmployees();
                break;
            case "Add an employee":
                addEmployee();
                break;
            case "Add a department":
                addDepartment();
                break;
            case "Add a role":
                addRole();
                break;
            case "Update an employee":
                changeEmployee();
                break;
        }
    });
};

start();

function viewDepartments() {
    connect.query("Select from department", function (err, answer) {
    });
    start();
}

function viewRoles() {
    connect.query("Select from role", function (err, answer){
    });
    start();
}

function viewEmployees() {
    connect.query("Select from employees", function (err, answer) { 
    });
    start();
}

function addDepartment() {
    inquirer.prompt({
        type: "input",
        message: "New Department Name?",
        name: "department"
    }).then(function (answer) {
        connect.query(
            "Insert into department set",
            {
                name: answer.department
            },
            function(err, answer) {
                if (err) {throw err;}
            }
        );
        start();
    });
}

function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "First Name",
            name: "first_name"
        },
        {
            type: "input",
            message: "Last name",
            name: "last_name"
        }
    ]).then(function (answer) {
        connect.query(
            "Insert into employee SET",
            {
                first_name: answer.first_name,
                last_name: answer.last_name,
                role_id: null,
                manager_id: null
            },
            function(err, answer) {
                if (err) {throw err;}
            }
        );
        start();
    });
}


function addRole() {
    inquirer.prompt([
        {
            type: "input",
            message: "Title",
            name: "newTitle"
        },
        {
            type: "input",
            message: "Salary",
            name: "newSalary"
        },
        {
            type: "input",
            message: "Department",
            name: "newDepartment"
        }
    ]).then(function (answer) {
        connect.query(
            "Insert into role set",
            {
                title: answer.newTitle,
                salary: answer.newSalary,
                department_id: answer.newDepartment
            },
            function (err, answer) {
                if (err) {throw err;}
            }
        );
        start();
    });
}