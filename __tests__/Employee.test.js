const Player = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Fred Durst')

    expect(employee.name).toBe('Fred Durst');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.phone).toEqual(expect.any(String));
});