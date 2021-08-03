const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const employee = [];


function mgrQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter team manager name.',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Enter employee ID.',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Enter email address.',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Enter office number.',
            name: 'office',
        }
    ])
}
    mgrQuestions();


