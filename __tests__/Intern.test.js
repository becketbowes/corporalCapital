const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const employee = new Employee('Fred Durst');
    this.employee.title = 'Intern';
    this.employee.school = 'freddurst';

    expect(employee.name).toBe('Fred Durst');
    expect(employee.title).toBe('Engineer');
    expect(employee.github).toBe('freddurst');
});