const inquirer = require('inquirer');
const number = require('./id');
const Manager = require('./Manager');
const Intern = require('./Intern');
const Publish = require('./Publish');

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
};

Engineer.prototype.makeEngineer = function (idType) {
    inquirer
        .prompt(engineerQ)
        .then((data) => {
            this.employeename = data.employeename;
            this.email = data.email;
            this.phone = data.phone;
            this.extra = data.extra;
            let person = this.engineer;
            Publish.prototype.addTeamMember(person);
            let kind = data.addmore;
            if (kind === "No, thats everyone. I'm ready to publish the site") {
                Publish.prototype.printPage();
            } else if (kind === 'Manager') {
                let someJerk = new Manager(kind, idType,);
                someJerk.makeManager(idType);
            } else if (kind === 'Engineer') {
                let coolDude = new Engineer(kind, idType);
                coolDude.makeEngineer(idType);
            } else {
                let surfBetty = new Intern(kind, idType)
                surfBetty.makeIntern(idType);
            };
        })
        .catch((error) => console.log(error));
};

module.exports = Engineer;