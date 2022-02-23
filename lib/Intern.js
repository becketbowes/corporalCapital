const inquirer = require('inquirer');
const Member = require('./Member');

class Intern extends Member {
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
                    message: 'School:'
                },
            ])
            .then((data) => {
                this.extra = data.extra;
            })
            .catch((error) => console.log(error));
    }
}

module.exports = Intern;