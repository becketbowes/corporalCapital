const inquirer = require('inquirer');
const Authenticate = require('./Authenticate');
const Employee = require('./Employee');

class Project {
    constructor(project) {
        this.project = project;
    }

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
        }
    ];
    coCaProject = function () {
        inquirer
            .prompt(projectQ)
            .then(function (data) {
                this.project = data.project;
                //make webpage
                console.log(this.project);
                //make id generator
                if (data.id === 'random') {
                    this.employee.id = '^$HuBL'
                } else {
                    this.employee.id = '007';
                };
                if (data.manager === 'Yes') {
                    this.employee.name = 'Becket'
                    this.employee.id = '//1221'
                    coCaEmployee();
                } else {
                    coCaEdit();
                }
                Employee(Project);
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

module.exports = Project;