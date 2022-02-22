const write = require('./write');
const template = require('./template');

const theProject = '';
const projectMembers = [];

function PublishProject(theProject, projectMembers) {
    this.title = theProject;
    this.array = projectMembers;
};

PublishProject.prototype.deconstructArray = function() {
    for (i=0; i < this.array.length; i++) {
        console.table(this.array[i]);
    }
};

// PublishProject.prototype.print = function() {
//     console.log(projectTitle)
// };

module.exports = { theProject, projectMembers };
module.exports = PublishProject.prototype.addtoArray;
// module.exports = PublishProject.prototype.print;