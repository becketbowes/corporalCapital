const writeFile = require('./write');
const template = require('./Template');

const publishSite = function(projectTitle) {
    finalDraft = template(projectTitle);
    writeFile(finalDraft);
};

module.exports = publishSite;