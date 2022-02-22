const write = require('./write');
const template = require('./pageTemplate');

function Page(teamName) {
    this.name = teamName;
    this.thing = 'thingoo';
    this.arr = [];
}

Page.prototype.printPage = function() {
    this.thing.push(this.array);
    console.log(this.name);
    console.log(this.thing);
    let html = template(this.name);
    write(html);
};

module.exports = Page;