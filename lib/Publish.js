const write = require('./write');
const template = require('./pageTemplate');

let teamArray = [];

function Publish(teamName, teamArray) {
    this.team = teamName;
    this.teamArray = teamArray;
}

Publish.prototype.printPage = function () {
    console.log(teamNameHolder[0]);
    for (i = 0; i < teamArray.length; i++) {
        console.table(teamArray[i]);
    };  
};

module.exports = teamArray;
module.exports = Publish