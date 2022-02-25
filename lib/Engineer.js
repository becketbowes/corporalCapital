const Member = require('./Member');

class Engineer extends Member {
    constructor(idType, extra) {
        super();

        this.github = extra;
    }
}

module.exports = Engineer;