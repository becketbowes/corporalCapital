const inquirer = require('inquirer');
const Project = require('./Project');
// const Manager = require('./Manager');
// const Engineer = require('./Engineer');
// const Intern = require('./Intern');

class Employee {
    constructor (name, id, title, email, phone) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email;
        this.phone = phone;
    }
    
//employee questions followed by function:
employeeQ = [
    {
        type: 'list',
        name: 'manager',
        message: 'Are you the manager?',
        choices: ['Yes', 'No']
    },
    {
        type: 'text',
        name: 'name',
        message: 'Name:'
    },
    {
        type: 'list',
        name: 'title',
        message: 'Title:',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'text',
        name: 'email',
        message: 'Email:'
    },
    {
        type: 'text',
        name: 'phone',
        message: 'Phone:'
    },
];
coCaEmployee = function () {
    inquirer
        .prompt(employeeQ)
        .then((data) => {
            this.employee.name = data.name;
            this.employee.title = data.title;
            this.employee.email = data.email;
            this.employee.phone = data.phone;
            if (data.title === 'Manager') {
                coCaManager(coCa);
            } else if (data.title === 'Engineer') {
                coCaEngineer(coCa);
            } else {
                coCaIntern(coCa);
            }
        })
        .catch((error) => {
            console.log(error);
        });
};
};

module.exports = Employee;