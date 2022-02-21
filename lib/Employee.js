const inquirer = require('inquirer');
// const employeeQ = require('./questions');
const number = require('./id');

function Employee(employeename, title, idType, email, phone) {
    this.employeename = employeename;
    this.title = title;
    this.id = number(idType);
    this.email = email;
    this.phone = phone;
};

Employee.prototype.makeEmployee = function (title, idType) {
    employeeQ = [
        {
            type: 'text',
            name: 'employeename',
            message: 'Employee Name:'
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
    inquirer
        .prompt(employeeQ)
        .then((data) => {
            employeename = data.employeename;
            email = data.email;
            phone = data.phone;
            this.employee = new Employee(employeename, title, idType, email, phone)
        })
        .catch((error) => console.log(error));
};

module.exports = Employee.prototype.makeEmployee;