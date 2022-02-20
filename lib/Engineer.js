const Employee = require('./Employee');
const generateCard = require('./makeCard');

class Engineer extends Employee {
    constructor(github) {
        super();
        this.github = github;
    }
       
makeCard() {
    person = this.engineer;
    generateCard(person);
}
}

module.exports = Engineer;