const number = require('./id');

class Member {
    constructor(nombre, position, email, phone, idType) {
        this.personName = nombre;
        this.position = position;
        this.id = number(idType);
        this.email = email;
        this.phone = phone;
    }
}

module.exports = Member;