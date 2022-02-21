var inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const publishSite = require('./makeSite');
const { managerQ, engineerQ, internQ, } = require('./questions');

//loop questions until all employees are added
const addAnother = function (addmore) {
    if (addmore === "No, thats everyone. I'm ready to publish the site") {
        publishSite(projectTitle);
    } else {
        position = addmore;
        addEmployee(projectTitle, idType, position);
    }
};

//function - ask question for each position, and return the information to corresponding employee objects
addEmployee = function (projectTitle, idType, position) {
    let nombre = '';
    let email = '';
    let phone = '';
    let github = '';
    if (position = 'Manager') {
        questions = managerQ;
    } else if (position = 'Engineer') {
        questions = engineerQ;
    } else if (position = 'Intern') {
        questions = internQ;
    };
    inquirer
        .prompt(questions)
        .then((data) => {
            let addmore = data.addmore
            addAnother(addmore);
            nombre = data.name;
            email = data.email;
            phone = data.phone;
            github = data.github;
        })
        .catch((error) => {
            console.log(error);
        })
    if (position = 'Manager') {
        new Manager(projectTitle, idType, position, nombre, email, phone, github);
    } else if (position = 'Engineer') {
        new Engineer(projectTitle, idType, position, nombre, email, phone, github);
    } else if (position = 'Intern') {
        new Intern(projectTitle, idType, position, nombre, email, phone, github);
    };
};
module.exports = { addEmployee, addAnother };