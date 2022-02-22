const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const teamArray = require('./Publish');
const Publish = require('./Publish');

class Member {
    constructor(projectTitle, idType) {
        this.project = projectTitle;
        this.idType = idType;
        this.kind = '';
    }

    printPage(finalProjectTitle) {
        let printAll = new Publish(finalProjectTitle);
        printAll.printPage();
    }

    pushToArray(person) {
        teamArray.push(person);
    }

    addMore(kind, idType) {
        if (kind === "No, thats everyone. I'm ready to publish the site") {
            let finalProjectTitle = new Publish;
            printPage(finalProjectTitle);
        } else if (kind === 'Manager') {
            let someJerk = new Manager(kind, idType);
            someJerk.makeManager(idType);
        } else if (kind === 'Engineer') {   
            let coolDude = new Engineer(kind, idType);
            coolDude.makeEngineer(idType);
        } else {
            let surfBetty = new Intern(kind, idType)
            surfBetty.makeIntern(idType);
        };
    }
}

module.exports = Member;