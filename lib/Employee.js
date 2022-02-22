const inquirer = require('inquirer');
// const employeeQ = require('./questions');
const number = require('./id');
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

function Employee(employeename, title, idType, email, phone) {
    this.employeename = employeename;
    this.title = title;
    this.id = number(idType);
    this.email = email;
    this.phone = phone;
    console.table(this.employee);
}

module.exports = Employee.prototype.makeEmployee;