loginQ = [
    {
        type: 'text',
        name: 'adminname',
        message: 'Admin Name:'
    },
    {
        type: 'text',
        name: 'password',
        message: 'Password:'
    }
];

projectQ = [
    {
        type: 'text',
        name: 'project',
        message: 'Project Title:'
    },
    {
        type: 'list',
        name: 'id',
        message: 'What kind of worker IDs would you like:',
        choices: ['random', 'ordinal']
    },
    {
        type: 'list',
        name: 'addperson',
        message: 'Who else would you like to add to your team?',
        choices: ['Manager', 'Engineer', 'Intern']
    }
];

employeeQ = [
    {
        type: 'text',
        name: 'employeename',
        message: 'Employee Name:'
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
    }
];

managerQ = [
    {
        type: 'text',
        name: 'github',
        message: 'Office Number:'
    },
    {
        type: 'list',
        name: 'addmore',
        message: 'Would you like to add another Employee?',
        choices: ['Manager', 'Engineer', 'Intern', "No, thats everyone. I'm ready to publish the site"]
    }
];


engineerQ = [
    {
        type: 'text',
        name: 'github',
        message: 'Github Username:'
    },
    {
        type: 'list',
        name: 'addmore',
        message: 'Would you like to add another Employee?',
        choices: ['Manager', 'Engineer', 'Intern', "No, thats everyone. I'm ready to publish the site"]
    }
];

internQ = [
    {
        type: 'text',
        name: 'github',
        message: 'School:'
    },
    {
        type: 'list',
        name: 'addmore',
        message: 'Would you like to add another Employee?',
        choices: ['Manager', 'Engineer', 'Intern', "No, thats everyone. I'm ready to publish the site"]
    }
];

module.exports = { loginQ, employeeQ, projectQ, managerQ, engineerQ, internQ, };