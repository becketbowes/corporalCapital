const write = require('./write');
const template = require('./pageTemplate');

class Publish {
    constructor(teamName, teamArray) {
        this.team = teamName;
        this.teamArray = teamArray;
    }

    pushToArray(person) {
        teamArray.push(person);
    }

    printPage() {
        console.log(this.teamName);
        for (i = 0; i < this.teamArray.length; i++) {
            console.table(teamArray[i]);
        }
    }
}

module.exports = Publish