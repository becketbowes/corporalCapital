const Manaager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Fred Durst');
    this.manager.title = 'Engineer';
    this.manager.number = '003';

    expect(manager.name).toBe('Fred Durst');
    expect(manager.title).toBe('Manager');
    expect(manager.number).toEqual(expect.any(Number));
});