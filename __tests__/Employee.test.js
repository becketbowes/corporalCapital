const Employee = require('../lib/Employee');

const projectTitle = 'cool new thing';
const idType = 'random'
var data = function () {
    this.title = 'Manager',
    this.nombre = 'Honey Booboo',
    this.email = 'becket@newexperiments.com',
    this.phone = 9179304602
};

test('creates an employee name', () => {
    let dursty = new Employee(projectTitle, idType, data);

    expect(dursty.nombre).toBe('Honey Booboo');
});

test('gets an employee id', () => {
    let shawna = new Employee(projectTitle, idType, data);

    expect(shawna.phone).toEqual(expect.any(Number));
});

test('creates an employee phone number', () => {
    let busta = new Employee(projectTitle, idType, data);

    expect(busta.phone).toEqual(9179304602);
});

test('creates an employee email address', () => {
    let leann = new Employee(projectTitle, idType, data);

    expect(leann.email).toEqual(expect.any(String));
});

