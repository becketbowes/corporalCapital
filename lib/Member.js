const number = require('./id');

class Member {
    constructor(idType, extra) {
        this.person = '';
        this.position = '';
        this.id = number(idType);
        this.email = '';
        this.phone = '';
    }
}

module.exports = Member;