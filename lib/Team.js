const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

const teamQ = [
    {
        type: 'text',
        name: 'project',
        message: 'Team Name or Project Title:'
    },
    {
        type: 'list',
        name: 'id',
        message: 'What kind of team member IDs would you like:',
        choices: ['random', 'ordinal']
    }
];

const teamMemberQ = [
    {
        type: 'text',
        name: 'personname',
        message: 'Employee Name:'
    },
    {
        type: 'list',
        name: 'position',
        message: 'What do they do for the team?',
        choices: ['Manager', 'Engineer', 'Intern']
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

const replayQ = [
    {
        type: 'list',
        name: 'printormore',
        message: 'Would you like to add another team member?',
        choices: ['Yes', "No, I'm ready to print."]
    }
];

class Team {
    constructor(teamName = '') {
        this.teamName = teamName;
        this.teamRoster = [];
    }

    teamBuildingExcercise() {
        inquirer
            .prompt(teamQ)
            .then((data) => {
                this.teamName = data.project;
                let idType = data.id;
                theresNoTeamInI(idType);
            })
            .catch((error) => console.log(error));
    }

    theresNoTeamInI(idType) {
        inquirer
            .prompt(teamMemberQ)
            .then((data) => {
                let nombre = data.personname;
                let position = data.position;
                let email = data.email;
                let phone = data.phone;
                if (position === 'Manager') {
                    let kimDeal = new Manager(nombre, position, email, phone, idType);
                    kimDeal.lilExtraThang();
                    this.teamRoster.push(kimDeal);
                } else if (position === 'Engineer') {
                    let frankBlack = new Engineer(nombre, position, email, phone, idType);
                    frankBlack.lilExtraThang();
                    this.teamRoster.push(frankBlack);
                } else if (position === 'Intern') {
                    let joeySantiago = new Intern(nombre, position, email, phone, idType);
                    joeySantiago.lilExtraThang();
                    this.teamRoster.push(joeySantiago);
                };
                doItMore();
            })
            .catch((error) => console.log(error));
    }

    doItMore() {
        inquirer
        .prompt(replayQ)
        .then((data) => {
            if (data.printormore === "Yes") {
                theresNoTeamInI();
            } else {
                publish();
            };
        })
        .catch((error) => console.log(error));
    }

    publish() {
        whitePages = this.teamRoster
        for (let i=0; i<whitePages; i++) {
            console.table(whitePages[i]);
        }
    }
}   

module.exports = Team;