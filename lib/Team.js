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
        name: 'person',
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
    constructor(name = '') {
        this.name = name
        this.teamName = '';
        this.idType = ''
        this.teamRoster = [];
    }

//define this parent object
    teamMake(teamName, id) {
        this.teamName = teamName;
        this.idType = id; 
    }

//add to object
    addPerson(person) {
        this.teamRoster.push(person);
    }

//ask team questions, name team object, call employee questions
    teamAsk() {
        inquirer
            .prompt(teamQ)
            .then((data) => {
                let teamName = data.project;
                let id = data.id;
                this.teamMake(teamName, id);
                this.individualAsk();
            })
            .catch((error) => console.log(error));
    }



//ask individual questions, call and pass data to employee specific questions
    individualAsk() {
        inquirer
            .prompt(teamMemberQ)
            .then((contact) => {
                let position = contact.position;
                if (position === 'Manager') {
                    this.managerAsk(contact);
                } else if (position === 'Engineer') {
                    this.engineerAsk(contact);
                } else {
                    this.internAsk(contact);
                };
            })
            .catch((error) => console.log(error));
    }

//ask manager question, make new team member object, add object to team roster in object, call the loop
    managerAsk(contact, id = this.idType) {
        inquirer
            .prompt(managerQ)
            .then((data) => {
                let extra = data.office;
                let kimDeal = new Manager(id, extra);
                kimDeal.person = contact.person;
                kimDeal.position = contact.position;
                kimDeal.email = contact.email;
                kimDeal.phone = contact.phone;
                console.table(kimDeal);
                this.addPerson(kimDeal);
                this.loopAsk();
            })
            .catch((error) => console.log(error));
    }

//ask engineer question, make new team member object, add object to array, call the loop
    engineerAsk(contact, id = this.idType) {
        inquirer
            .prompt(engineerQ)
            .then((data) => {
                let extra = data.github;
                let frankBlack = new Engineer(id, extra);
                frankBlack.person = contact.person;
                frankBlack.position = contact.position;
                frankBlack.email = contact.email;
                frankBlack.phone = contact.phone;
                console.table(frankBlack);
                this.addPerson(frankBlack);
                this.loopAsk();
            })
            .catch((error) => console.log(error));
    }

//ask intern question, make new team member object, add object to array, call the loop
    internAsk(contact, id = this.idType) {
            inquirer
                .prompt(internQ)
                .then((data) => {
                    let extra = data.school;
                    let joeySantiago = new Intern(id, extra);
                    joeySantiago.person = contact.person;
                    joeySantiago.position = contact.position;
                    joeySantiago.email = contact.email;
                    joeySantiago.phone = contact.phone;
                    console.table(joeySantiago);
                    this.addPerson(joeySantiago);
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
        for (let i = 0; i < this.teamRoster.length; i++) {
            console.table(this.teamRoster[i]);
        };
    }
}

module.exports = Team;