const Member = require('./Member');
const number = require('./utils/id');

class Manager extends Member {
    constructor(idType, extra) {
        super();

        this.id = number(idType);
        this.office = extra;
    }
}

module.exports = Manager;