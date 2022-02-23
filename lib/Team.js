const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

//question arrays for inquirer
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
        message: 'Teammember Name:'
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

const managerQ = [
    {
        type: 'text',
        name: 'office',
        message: 'Office Number:'
    }
];

const engineerQ = [
        {
            type: 'text',
            name: 'github',
            message: 'Github Username:'
        }
];

const internQ = [
        {
            type: 'text',
            name: 'school',
            message: 'School:'
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

//team object with team roster
class Team {
    constructor(teamName = '') {
        this.teamName = teamName;
        this.teamRoster = [];
    }

//ask team questions, name team object, call employee questions
    teamAsk() {
        inquirer
            .prompt(teamQ)
            .then((data) => {
                this.teamName = data.project;
                let idType = data.id;
                this.individualAsk(idType);
            })
            .catch((error) => console.log(error));
    }

//ask individual questions, call and pass data to employee specific questions
    individualAsk(idType) {
        inquirer
            .prompt(teamMemberQ)
            .then((data) => {
                let nombre = data.personname;
                let position = data.position;
                let email = data.email;
                let phone = data.phone;
                if (position === 'Manager') {
                    this.managerAsk(nombre, position, email, phone, idType);
                } else if (position === 'Engineer') {
                    this.engineerAsk(nombre, position, email, phone, idType);
                } else if (position === 'Intern') {
                    this.internAsk(nombre, position, email, phone, idType);
                };
            })
            .catch((error) => console.log(error));
    }

//ask manager question, make new team member object, add object to team roster in object, call the loop
    managerAsk(nombre, position, email, phone, idType) {
        inquirer
            .prompt(internQ)
            .then((data) => {
                let extra = data.office;
                let kimDeal = new Manager(nombre, position, email, phone, idType, extra);
                console.table(kimDeal);
                this.teamRoster.push(kimDeal);
                this.loopAsk();
            })
            .catch((error) => console.log(error));
    }

//ask engineer question, make new team member object, add object to array, call the loop
    engineerAsk(nombre, position, email, phone, idType) {
        inquirer
            .prompt(internQ)
            .then((data) => {
                let github = data.github;
                let frankBlack = new Engineer(nombre, position, email, phone, idType, github);
                console.table(frankBlack);
                this.teamRoster.push(frankBlack);
                this.loopAsk();
            })
            .catch((error) => console.log(error));
    }

//ask intern question, make new team member object, add object to array, call the loop
    internAsk(nombre, position, email, phone, idType) {
            inquirer
                .prompt(internQ)
                .then((data) => {
                    let extra = data.school;
                    let joeySantiago = new Intern(nombre, position, email, phone, idType, extra);
                    console.table(joeySantiago);
                    this.teamRoster.push(joeySantiago);
                    this.loopAsk();
                })
                .catch((error) => console.log(error));
    }

//ask to loop or print
    loopAsk() {
        inquirer
            .prompt(replayQ)
            .then((data) => {
                if (data.printormore === "Yes") {
                    this.individualAsk();
                } else {
                    this.publish();
                }
            })
            .catch((error) => console.log(error));
    }

//print to website
    publish() {
        let whitePages = this.teamRoster
        for (let i = 0; i < whitePages; i++) {
            console.table(whitePages[i]);
        };
    }
}

module.exports = Team;