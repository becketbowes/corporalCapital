const inquirer = require('inquirer');
const Employee = require('./Employee');

class Intern extends Employee {
    constructor (id = '') {
        super(id);
        this.number = number;
    }
    //intern question, function
    internQ = [
        {
            type: 'text',
            name: 'school',
            message: 'School:'
        }
    ];
    coCaIntern = function () {
        inquirer
            .prompt(internQ)
            .then((data) => {
                this.employee.school = data.school;
                console.log(this.Intern);
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

module.exports = Intern;
