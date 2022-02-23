const inquirer = require('inquirer');
const Member = require('./Member');

class Manager extends Member {
    constructor(idType) {
        super();
        this.extra = '';
    }

    lilExtraThang() {
        inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'extra',
                    message: 'Office Number:'
                },
            ])
            .then((data) => {
                this.extra = data.extra;
            })
            .catch((error) => console.log(error));
    }
}

module.exports = Manager;