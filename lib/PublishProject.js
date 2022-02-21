const write = require('./write');
const template = require('./template');

function PublishProject(projectTitle) {
    this.projectTitle = projectTitle;
    // this.projectObject = [];
};

PublishProject.prototype.addtoArray = function(person) {
    console.index(person);
};

PublishProject.prototype.print = function() {
    console.log(projectTitle)
};

module.exports = PublishProject.prototype.addtoArray;
module.exports = PublishProject.prototype.print;