const Employee = require('../lib/Employee');

test('creates an employee name', () => {
    let dursty = new Employee('Honey Booboo', 'Manager',  'Random', 'boo@aol.com', '970-008-3747');

    expect(dursty.employeename).toEqual('Honey Booboo');
});

test('gets an employee id', () => {
    let shawna = new Employee('Honey Booboo', 'Manager',  'Random', 'boo@aol.com', '914-663-7844');

    expect(shawna.id).toEqual(expect.any(Number));
});

test('creates an employee phone number', () => {
    let busta = new Employee('Honey Booboo', 'Manager',  'Random', 'boo@aol.com', '914-663-7844');

    expect(busta.phone).toEqual('914-663-7844');
});

test('creates an employee email address', () => {
    let leann = new Employee('Honey Booboo', 'Manager',  'Random', 'grace@aol.com', '914-663-7844');

    expect(leann.email).toEqual('grace@aol.com');
});

