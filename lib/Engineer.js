const inquirer = require('inquirer');
const number = require('./id');
const Member = require('./Member');

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
        name: 'extra',
        message: 'Github Username:'
    },
    {
        type: 'list',
        name: 'addmore',
        message: 'Would you like to add another Employee?',
        choices: ['Manager', 'Engineer', 'Intern', "No, thats everyone. I'm ready to publish the site"]
    }
];

class Engineer extends Member {
    constructor(projectTitle, idType) {
        super(projectTitle, idType);

        this.id = number(idType);
        this.title = projectTitle;
    }

    makeEngineer(idType) {
        inquirer
            .prompt(engineerQ)
            .then((data) => {
                this.employeename = data.employeename;
                this.email = data.email;
                this.phone = data.phone;
                this.extra = data.extra;
                let person = this.engineer;
                pushToArray(person);
                let kind = data.addmore;
                addMore(kind, idType);
            })
            .catch((error) => console.log(error));
    }
}

module.exports = Engineer;