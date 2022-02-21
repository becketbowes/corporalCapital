const Employee = require('./Employee');
const MakeCard = require('./makeCard');

class Manager extends Employee {
    constructor(github) {
        super();
        this.github = github;
    }

makeCard() {
    person = this.manager;
    console.log('this manager:', person());
    generateCard(person);
}
}

module.exports = Manager;