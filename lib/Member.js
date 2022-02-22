const inquirer = require('inquirer');
const number = require('./id');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const teamArray = require('./Publish');
const Publish = require('./Publish');


const memberQ = [
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
    }
];

function Member(projectTitle, title, idType) {
    this.project = projectTitle;
    this.title = title;
    this.id = number(idType);
    this.kind = '';
}

Member.prototype.makeMember = function (idType) {
    inquirer
        .prompt(memberQ)
        .then((data) => {
            this.employeename = data.employeename;
            this.email = data.email;
            this.phone = data.phone;
            let person = this.member;
            pushtoArray(person);
            let kind = this.data.addmore;
            addMore(kind);
        })
        .catch((error) => console.log(error));
}

Member.prototype.printPage = function(finalProjectTitle) {
    let printAll = new Publish(finalProjectTitle);
    printAll.printPage();
}

Member.prototype.pushToArray = function (person) {
    teamArray.push(person)
}

Member.prototype.addMore = function (kind) {
    if (kind === "No, thats everyone. I'm ready to publish the site") {
        let finalProjectTitle = this.project;
        printPage(finalProjectTitle);
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
};

module.exports = Member;