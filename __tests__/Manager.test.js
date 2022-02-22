const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    let barm = new Manager('Manager', 'random');

    expect(barm.title).toBe('Manager');
    expect(barm.id).toEqual(expect.any(Number));
});