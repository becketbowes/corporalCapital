const write = require('./write');
const template = require('./template');

let teamArray = [];

publish = function(teamArray) {
    console.log(teamName);
    for (i = 0; i < teamArray.length; i++) {
        console.table(teamArray);
    };  
};

function Page(teamName) {
    this.name = teamName;
    this.thing = 'thingoo'
}

Page.prototype.printPage = function() {
    console.log(this.name);
    console.log(this.thing);
};

module.exports = publish;
module.exports = Page;
module.exports = teamArray;