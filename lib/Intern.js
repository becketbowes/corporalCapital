const Member = require('./Member');

class Intern extends Member {
    constructor(idType, extra) {
        super();
 
        this.extra = extra;
    }
}

module.exports = Intern;