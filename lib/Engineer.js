const Member = require('./Member');

class Engineer extends Member {
    constructor(github) {
        super();
        this.github = 'github';
    }
}

module.exports = Engineer;