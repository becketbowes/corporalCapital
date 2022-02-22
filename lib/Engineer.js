const inquirer = require('inquirer');
const number = require('./id');
const Manager = require('./Manager');
const Intern = require('./Intern');
const teamArray = require('./Publish');
const publish = require('./Publish');

const engineerQ = [
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

function Engineer(title, idType) {
    this.title = title;
    this.id = number(idType);

    // this.employeename = employeename;
    // this.email = email;
    // this.phone = phone;
    // this.extra = extra;
};

Engineer.prototype.makeEngineer = function (idType) {
    inquirer.
        .prompt(engineerQ)
        .then((data) => {
            this.employeename = data.employeename;
            this.email = data.email;
            this.phone = data.phone;
            this.extra = data.extra;
            let kind = data.addmore;
            teamArray.push(this.engineer);
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

module.exports = Engineer;