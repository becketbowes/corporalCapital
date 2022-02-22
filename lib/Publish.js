const write = require('./write');
const template = require('./pageTemplate');

let teamArray = [];

const publish = function (teamArray) {
    console.log(teamName);
    for (i = 0; i < teamArray.length; i++) {
        console.table(teamArray[i]);
    };  
};

module.exports = publish;
module.exports = teamArray;