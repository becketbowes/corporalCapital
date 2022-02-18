const inquirer = require('inquirer');
const Project = require('./Project');

function Authenticate() {
    // const Janitor {
    //     this.name = becket;
    //     this.id = '//1221';
    //     title = 'janitor';
    //     email = 'becket.bowes@gmail.com';
    //     phone = '917-930-4602';
    //     github = 'becketbowes'
    // };

    //authenticate admin with username and password
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
    const coCaPass = function () {
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
    coCaPass();

    const optionQ = [
        {
            type: 'list',
            name: 'neworedit',
            message: 'would you like to make a new page or edit an old one?',
            choices: ['New', 'Edit Existing']
        }
    ];
    const coCaOpt = function () {
        inquirer
            .prompt(optionQ)
            .then((data) => {
                if (data.neworedit === 'New') {
                    this.project = new Project();
                } else {
                    coCaEdit();
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

module.exports = Authenticate;