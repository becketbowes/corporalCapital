const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id = '') {
        super(id);
        
        this.number = number;
    }
    //manager question, function
    managerQ = [
        {
            type: 'text',
            name: 'office',
            message: 'Office Number:'
        }
    ];
    coCaManager = function () {
        inquirer
            .prompt(managerQ)
            .then((data) => {
                this.employee.office = data.office;
                console.log(this.manager);
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

module.exports = Manager;