const Employee = require('./Employee');
const generateCard = require('./makeCard');

// internPrompt = function(kind, idType, projectTitle) {
//     inquirer
//     .prompt(employeeNameQ, phoneQ, emailQ, schoolQ, addMoreQ)
//     .then((data) => {
//         let individual = data.employeename;
//         let title = kind;
//         let id = number(idType);
//         let phone = data.phone;
//         let email = data.email;
//         let github = data.github;
//         this.intern = new Intern(individual, title, id, phone, email, github);
//         if (data.addmore === "No, thats everyone. I'm ready to publish the site") {
//             MakeSite(projectTitle);
//         } else {
//             kind = data.addmore;
//             goOn(kind);
//         }
//     })
// };


class Intern extends Employee {
    constructor(github) {
        super();
        this.github = github;
    }

makeCard() {
    person = this.intern;
    console.log('this intern:', person());
    generateCard(person);

}
}

module.exports = Intern;