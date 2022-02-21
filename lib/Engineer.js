const inquirer = require('inquirer');
const number = require('./id');
const addToArray = require('./PublishProject');
const print = require('./PublishProject');
const makeManager = require('./Manager');
const makeIntern = require('./Intern')


function Engineer(employeename, title, idType, email, phone, extra) {
    this.employeename = employeename;
    this.title = title;
    this.id = number(idType);
    this.email = email;
    this.phone = phone;
    this.extra = extra;
};

Engineer.prototype.makeEngineer = function (title, idType) {
    managerQ = [
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
            name: 'github',
            message: 'Github Username:'
        },
        {
            type: 'list',
            name: 'addmore',
            message: 'Would you like to add another Employee?',
            choices: ['Manager', 'Engineer', 'Intern', "No, thats everyone. I'm ready to publish the site"]
        }
    ];
    inquirer
        .prompt(managerQ)
        .then((data) => {
            employeename = data.employeename;
            email = data.email;
            phone = data.phone;
            extra = data.extra;
            this.manager = new Manager(employeename, title, idType, email, phone);
            addToArray(this.manager);
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

module.exports = Engineer.prototype.makeEngineer;