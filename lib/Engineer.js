const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(id = '') {
        super(id);
        this.github = github;
    }
    //engineer question, function
    engineerQ = [
        {
            type: 'text',
            name: 'gibhub',
            message: 'Github Username:'
        }
    ];
    coCaEngineer = function () {
        inquirer
            .prompt(engineerQ)
            .then((data) => {
                this.employee.github = data.github;
                console.log(this.Engineer);
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

module.exports = Engineer;