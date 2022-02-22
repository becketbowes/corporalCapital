const Project = require('../lib/Project');

test('creates a new project', () => {
    let roboticsLab = new Project();

    expect(dursty.employeename).toEqual('Honey Booboo');
});

test('gets an employee id', () => {
    let shawna = new Employee('Honey Booboo', 'Manager',  'Random', 'boo@aol.com', '914-663-7844');

    expect(shawna.id).toEqual(expect.any(Number));
});
