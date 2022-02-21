const inquirer = require('inquirer');
const number = require('./id');
const addToArray = require('./PublishProject');
const print = require('./PublishProject');
const makeEngineer = require('./Engineer');
const makeManager = require('./Manager')

function Intern(employeename, title, idType, email, phone, extra) {
    this.employeename = employeename;
    this.title = title;
    this.id = number(idType);
    this.email = email;
    this.phone = phone;
    this.extra = extra;
};

Intern.prototype.makeIntern = function (title, idType) {
    internQ = [
        {
            type: 'text',
            name: 'employeename',
            message: 'Employee Name:'
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
        {
            type: 'text',
            name: 'extra',
            message: 'School:'
        },
        {
            type: 'list',
            name: 'addmore',
            message: 'Would you like to add another Employee?',
            choices: ['Manager', 'Engineer', 'Intern', "No, thats everyone. I'm ready to publish the site"]
        }
    ];
    inquirer
        .prompt(internQ)
        .then((data) => {
            employeename = data.employeename;
            email = data.email;
            phone = data.phone;
            extra = data.extra;
            this.intern = new Intern(employeename, title, idType, email, phone);
            addToArray(this.intern);
            if (kind === "No, thats everyone. I'm ready to publish the site") {
                print();
            } else if (kind === 'Manager') {
                this.manager = new makeManager(kind, idType);
            } else if (kind === 'Engineer') {
                this.engineer = new makeEngineer(kind, idType);
            } else {
                this.intern = new makeIntern(kind, idType);
            };
        })
        .catch((error) => console.log(error));
};

module.exports = Intern.prototype.makeIntern;