const Member = require('./Member');
const number = require('./utils/id');

class Intern extends Member {
    constructor(idType, extra) {
        super();

        this.id = number(idType);
        this.school = extra;
    }
}

module.exports = Intern;