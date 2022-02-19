const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const employee = new Employee('Fred Durst');
    this.employee.title = 'Engineer';
    this.employee.github = 'freddurst';

    expect(employee.name).toBe('Fred Durst');
    expect(employee.title).toBe('Engineer');
    expect(employee.github).toBe('freddurst');
});