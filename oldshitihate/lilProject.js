const inquirer = require('inquirer');
const projectQ = require('./questions')

const lilProject = function() {
    inquirer
        .prompt(projectQ)
        .then((data) => console.log(data.project, data.id, data.addperson))
        .catch((error) => console.log(error))
};
lilProject();

module.exports = lilProject;