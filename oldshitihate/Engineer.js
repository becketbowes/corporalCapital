const Employee = require('./Employee');
const generateCard = require('./makeCard');

class Engineer extends Employee {
    constructor(github) {
        super();
        this.github = github;
    }
       
makeCard() {
    person = this.engineer;
    console.log('this engineer:', person());
    generateCard(person);
}
}

module.exports = Engineer;