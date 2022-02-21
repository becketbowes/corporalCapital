const inquirer = require('inquirer');
const number = require('./Id');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const { projectQ, managerQ, engineerQ, internQ, } = require('./questions');

asker = function () {
    inquirer
        .prompt(projectQ)
        .then((data) => {
            console.log(data.project, data.id, data.addperson)
            // let projectTitle = data.project;
            // let idType = data.id;
            // let kind = employee.addperson;
            // goOn(kind, idType, projectTitle);
            // console.log(projectTitle, idType, kind);
        })
        .catch((error) => console.log(error))
}

// goOn = function (kind, idType, projectTitle) {
//     if (kind === 'Manager') {
//         inquirer
//             .prompt(managerQ)
//             .then((data) => {
//                 let individual = data.employeename;
//                 let title = kind;
//                 let id = number(idType);
//                 let phone = data.phone;
//                 let email = data.email;
//                 let github = data.github;
//                 this.manager = new Manager(individual, title, id, phone, email, github);
//                 if (data.addmore === "No, thats everyone. I'm ready to publish the site") {
//                     MakeSite(projectTitle);
//                 } else {
//                     kind = data.addmore;
//                     goOn(kind);
//                 }
//             })
//             .catch((error) => console.log(error));
//     } else if (kind === 'Engineer') {
//         inquirer
//             .prompt(engineerQ)
//             .then((data) => {
//                 let individual = data.employeename;
//                 let title = kind;
//                 let id = number(idType);
//                 let phone = data.phone;
//                 let email = data.email;
//                 let github = data.github;
//                 this.engineer = new Engineer(individual, title, id, phone, email, github);
//                 if (data.addmore === "No, thats everyone. I'm ready to publish the site") {
//                     MakeSite(projectTitle);
//                 } else {
//                     kind = data.addmore;
//                     goOn(kind);
//                 }
//             })
//             .catch((error) => console.log(error));
//     } else if (kind === 'Intern') {
//         internPrompt = function(kind, idType, projectTitle) {
//             inquirer
//             .prompt(internQ)
//             .then((data) => {
//                 let individual = data.employeename;
//                 let title = kind;
//                 let id = number(idType);
//                 let phone = data.phone;
//                 let email = data.email;
//                 let github = data.github;
//                 this.intern = new Intern(individual, title, id, phone, email, github);
//                 if (data.addmore === "No, thats everyone. I'm ready to publish the site") {
//                     MakeSite(projectTitle);
//                 } else {
//                     kind = data.addmore;
//                     goOn(kind);
//                 }
//             })
//         };
//     };
// };

module.exports = asker();