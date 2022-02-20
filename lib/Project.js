const inquirer = require('inquirer');
const Inquire = require('./AddEmployee');
const makeSite = require('./makeSite');

//make a new project
Project = function () {
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
            projectTitle = data.title;
            idType = data.id;
            position = data.addperson;
            addEmployee(projectTitle, idType, position);
        })
        .catch((error) => {
            console.log(error);
        });
};

module.exports = Project;