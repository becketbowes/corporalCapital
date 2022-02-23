const Member = require('./Member');

class Intern extends Member {
    constructor(extra) {
        super();
        this.extra = extra;
    }
}

module.exports = Intern;