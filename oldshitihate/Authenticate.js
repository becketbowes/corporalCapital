const inquirer = require('inquirer');
const Project = require('./Project');

function Authenticate() {
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
                    Project();
                } else {
                    console.log('you do not have permission')
                };
            })
            .catch((error) => {
                console.log(error);
            });
    };
    coCaPass();
};

module.exports = Authenticate;