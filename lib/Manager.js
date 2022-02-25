const Member = require('./Member');

class Manager extends Member {
    constructor(idType, extra) {
        super();

        this.extra = extra;
    }
}

module.exports = Manager;