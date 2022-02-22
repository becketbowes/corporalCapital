const inquirer = require('inquirer');
const number = require('./id');
const Engineer = require('./Engineer');
const Manager = require('./Manager');
const teamArray = require('./Publish');
const publish = require('./Publish');

const internQ = [
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

function Intern(title, idType) {
    this.title = title;
    this.id = number(idType);

    // this.id = number(idType);
    // this.email = email;
    // this.phone = phone;
    // this.extra = extra;
};

Intern.prototype.makeIntern = function (idType) {
    inquirer
        .prompt(internQ)
        .then((data) => {
            this.employeename = data.employeename;
            this.email = data.email;
            this.phone = data.phone;
            this.extra = data.extra;
            kind = data.addmore;
            teamArray.push(this.intern);
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

module.exports = Intern;