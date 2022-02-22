const write = require('./write');
const template = require('./pageTemplate');

function Publish(teamName) {
    this.team = teamName;
    this.teamArray = [];
}

Publish.prototype.addTeamMember = function(person) {
    this.teamArray.push(person)
}

Publish.prototype.printPage = function () {
    console.log(teamNameHolder[0]);
    for (i = 0; i < teamArray.length; i++) {
        console.table(teamArray[i]);
    };  
};

module.exports = Publish