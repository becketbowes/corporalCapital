const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    let barm = new Manager('Kim Deal', 'Kim Deal', 'Manager', 'random', 'grace@aol.com', '914-663-7844', '01');

    expect(barm.banana).toEqual('Kim_Deal');
    expect(barm.title).toBe('Manager');
    expect(barm.number).toEqual('01');
});