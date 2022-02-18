var inquirer = require('inquirer');
const ListPrompt = require('inquirer/lib/prompts/list');

//call global object from data:
class Project {
    constructor() {
        this.project = "";
    }
};
class Employee {
    constructor () {
        this.id = newOrdinalId => { i = 0, i++, newOrdinalId = i };
    }
};

var coCa = [this.project, this.employee];

//login for admin with password, followed by function:
const loginQ = [
    {
        type: 'text',
        name: 'name',
        message: 'Name:'
    },
    {
        type: 'text',
        name: 'id',
        message: 'ID:'
    }
];
coCaPass = function () {
    inquirer
        .prompt(loginQ)
        .then((data) => {
            if (data.name === 'becket' && data.id === '//1221') {
                coCaOpt(data.name);
            } else {
                console.log('you do not have permission')
            };
        })
        .catch((error) => {
            console.log(error);
        });
};

//create new page or edit existing? questions followed by function:
const optionQ = [
    {
        type: 'list',
        name: 'neworedit',
        message: 'would you like to make a new page or edit an old one?',
        choices: ['New', 'Edit Existing']
    }
];
coCaOpt = function () {
    inquirer
        .prompt(optionQ)
        .then((data) => {
            if (data.neworedit === 'New') {
                coCaProject(data.name);
            } else {
                coCaEdit();
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

//make edit option
var coCaEdit = function() {
    console.log('do not forget to make an edit option');
};
//project questions followed by project function:

let newRandomId = function() {
    var array = new Uint32Array(6);
    self.crypto.getRandomValues(array);
    newId = array.join();
    return newId;
};
newOrdinalId => { i = 0, i++, newOrdinalId = i };
const projectQ = [
    {
        type: 'text',
        name: 'project',
        message: 'Project Title:'
    },
    {
        type: 'list',
        name: 'manager',
        message: 'Are you the manager?',
        choices: ['Yes', 'No']
    },
    {
        type: 'list',
        name: 'id',
        message: 'What kind of worker IDs would you like:',
        choices: ['random', 'ordinal']
    }
];
coCaProject = function () {
    inquirer
        .prompt(projectQ)
        .then(function (data) {
            this.project = data.project;
            //make webpage
            if (data.id === 'random') {
                this.employee.id = newRandomId();
            } else {
                this.employee.id = newOrdinalId();
            };
            if (data.manager === 'Yes') {
                this.employee.name = 'Becket'
                this.employee.id = '//1221'
                coCaEmployee();
            } else {
                coCaEdit();
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

//employee questions followed by function:
const employeeQ = [
    {
        type: 'text',
        name: 'name',
        message: 'Name:'
    },
    {
        type: 'list',
        name: 'title',
        message: 'Title:',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'text',
        name: 'email',
        message: 'Email:'
    },
    {
        type: 'text',
        name: 'phone',
        message: 'Phone:'
    },
];
coCaEmployee = function () {
    inquirer
        .prompt(employeeQ)
        .then((data) => {
            this.employee.name = data.name;
            this.employee.title = data.title;
            this.employee.email = data.email;
            this.employee.phone = data.phone;
            if (data.title === 'Manager') {
                coCaManager(coCa);
            } else if (data.title === 'Engineer') {
                coCaEngineer(coCa);
            } else {
                coCaIntern(coCa);
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

//manager question, function
const managerQ = [
    {
        type: 'text',
        name: 'office',
        message: 'Office Number:'
    }
];
coCaManager = function () {
    inquirer
        .prompt(managerQ)
        .then((data) => {
            this.employee.office = data.office;
        })
        .catch((error) => {
            console.log(error);
        });
};

//engineer question, function
const engineerQ = [
    {
        type: 'text',
        name: 'gibhub',
        message: 'Github Username:'
    }
];
coCaEngineer = function () {
    inquirer
        .prompt(engineerQ)
        .then((data) => {
            this.employee.github = data.github;
        })
        .catch((error) => {
            console.log(error);
        });
};

//intern question, function
const internQ = [
    {
        type: 'text',
        name: 'school',
        message: 'School:'
    }
];
coCaIntern = function () {
    inquirer
        .prompt(internQ)
        .then((data) => {
            this.employee.school = data.school;
            //MakeCard(employee)
            console.log(coCa);
        })
        .catch((error) => {
            console.log(error);
        });
};

coCaPass();