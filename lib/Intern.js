const Employee = require('./Employee');
const generateCard = require('./makeCard');

class Intern extends Employee {
    constructor(github) {
        super();
        this.github = github;
    }

makeCard() {
    person = this.intern;
    generateCard(person);
}
}

module.exports = Intern;