const fs = require('fs');
const write = require('./write');
const template = require('./pageTemplate');

printPage = function(teamName) {
    console.log(teamName);
    let html = template(teamName);
    write(html);
};

module.exports = printPage;