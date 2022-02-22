const inquirer = require('inquirer');
const number = require('./id');
const Member = require('./Member');

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

class Manager extends Member {
    constructor(projectTitle, idType) {
        super(projectTitle, idType);

        this.id = number(idType);
        this.title = projectTitle;
    }

    makeManager(idType) {
        inquirer
        .prompt(managerQ)
        .then((data) => {
            this.employeename = data.employeename;
            this.email = data.email;
            this.phone = data.phone;
            this.extra = data.extra;
            let person = this.manager;
            this.pushToArray(person);
            let kind = data.addmore;
            this.addMore(kind, idType);
        })
        .catch((error) => console.log(error));
    }
}

module.exports = Manager;