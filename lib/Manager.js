const Member = require('./Member');

class Manager extends Member {
    constructor(extra) {
        super();
        this.extra = extra;
    }
}

module.exports = Manager;