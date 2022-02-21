const inquirer = require('inquirer');
const PublishProject = require('./PublishProject');
const makeManager = require('./Manager');
const makeEngineer = require('./Engineer');
const makeIntern = require('./Intern');

function Project(projectTitle) {
    this.projectTitle = projectTitle;
};

Project.prototype.makeProject = function () {
    projectQ = [
        {
            type: 'text',
            name: 'project',
            message: 'Project Title:'
        },
        {
            type: 'list',
            name: 'id',
            message: 'What kind of worker IDs would you like:',
            choices: ['random', 'ordinal']
        },
        {
            type: 'list',
            name: 'addperson',
            message: 'Who else would you like to add to your team?',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ];
    inquirer
        .prompt(projectQ)
        .then((data) => {
            projectTitle = data.project;
            idType = data.id;
            kind = data.addperson;
            PublishProject(projectTitle);
            if (kind === 'Manager') {
                this.manager = new makeManager(kind, idType);
            } else if (kind === 'Engineer') {
                this.engineer = new makeEngineer(kind, idType);
            } else {
                this.intern = new makeIntern(kind, idType);
            };
        })
        .catch((error) => console.log(error));
};

module.exports = Project.prototype.makeProject;