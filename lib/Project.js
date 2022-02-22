const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const printPage = require('./Page');

//questions
const projectQ = [
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
    },
    {
        type: 'list',
        name: 'addperson',
        message: 'Who would you like to add to your team?',
        choices: ['Manager', 'Engineer', 'Intern']
    }
];

makeProject = function () {
    inquirer
        .prompt(projectQ)
        .then((data) => {
            let teamName = data.project;
            printPage(teamName);
            let idType = data.id;
            let title = data.addperson;
            if (title === 'Manager') {
                this.manager = new Manager(title, idType);
            } else if (title === 'Engineer') {
                this.engineer = new Engineer(title, idType);
            } else if (title === 'Intern') {
                this.intern = new Intern(title, idType);
            } else {
                return (error);
            };
        })
        .catch((error) => console.log(error));
};

module.exports = makeProject;