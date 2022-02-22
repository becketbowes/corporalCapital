const inquirer = require('inquirer');
const number = require('./id');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const teamArray = require('./Publish');
const publish = require('./Publish');

const managerQ = [
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
        message: 'Office Number:'
    },
    {
        type: 'list',
        name: 'addmore',
        message: 'Would you like to add another Employee?',
        choices: ['Manager', 'Engineer', 'Intern', "No, thats everyone. I'm ready to publish the site"]
    }
];

function Manager(title, idType) {
    this.title = title;
    this.id = number(idType);

    // this.id = number(idType);
    // this.email = email;
    // this.phone = phone;
    // this.extra = extra;
};

Manager.prototype.makeManager = function (idType) {
    inquirer
        .prompt(managerQ)
        .then((data) => {
            this.employeename = data.employeename;
            this.email = data.email;
            this.phone = data.phone;
            this.extra = data.extra;
            kind = data.addmore;
            teamArray.push(this.manager);
            if (kind === "No, thats everyone. I'm ready to publish the site") {
                publish();
            } else if (kind === 'Manager') {
                this.manager = new Manager(kind, idType);
            } else if (kind === 'Engineer') {
                this.engineer = new Engineer(kind, idType);
            } else {
                this.intern = new Intern(kind, idType);
            };
        })
        .catch((error) => console.log(error));
};

module.exports = Manager;