const Member = require('./Member');
const number = require('./id');

class Engineer extends Member {
    constructor(idType, extra) {
        super();

        this.id = number(idType);
        this.github = extra;
    }
}

module.exports = Engineer;