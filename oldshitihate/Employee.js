const inquirer = require('inquirer');
const number = require('./Id');

class Employee {
    constructor(label, banana, position, idType, email, phone) {
        this.label = label;
        this.banana = banana;
        this.title = position;
        this.id = number(idType);
        this.email = email;
        this.phone = phone;
    }
};

module.exports = Employee;