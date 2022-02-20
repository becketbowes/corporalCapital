const number = require('./Id');
const addEmployee = require('./AddEmployee');

class Employee {
    constructor(projectTitle, idType, position, nombre, email, phone){
        this.nombre = nombre;
        this.project = projectTitle;
        this.id = number(idType);
        this.title = position;
        this.email = email;
        this.phone = phone;
    }

makeEmployee(projectTitle, idType, position, nombre, email, phone) {
    this.project = projectTitle;
    this.id = number(idType);
    this.nombre = nombre;
    this.title = position;
    this.email = email;
    this.phone = phone;
}
}

module.exports = Employee;
