const Employee = require('./Employee');
const MakeCard = require('./makeCard');

class Manager extends Employee {
    constructor(projectTitle, idType, position, data) {
        super();
        this.github = data.github;
    }

makeCard() {
    person = this.manager;
    generateCard(person);
}
}

module.exports = Manager;