const write = require('./write');
const template = require('./pageTemplate');

let teamArray = [];

class Publish {
    constructor(teamName, teamArray) {
        this.team = teamName;
        this.teamArray = teamArray;
    }
    printPage() {
        console.log(this.teamName);
        for (i = 0; i < this.teamArray.length; i++) {
            console.table(teamArray[i]);
        }
    }
}

module.exports = teamArray;
module.exports = Publish