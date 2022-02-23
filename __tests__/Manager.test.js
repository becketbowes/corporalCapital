const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    let fellah = new Manager('Paulie Girl', 'Engineer', 'shit@poop.scat', '458-663-7183', 'random');

    expect(fellah.position).toBe('Engineer');
    expect(fellah.id).toEqual(expect.any(Number));
    expect(fellah.phone).toBe('458-663-7183');
    expect(fellah.email).toBe('shit@poop.scat');
    expect(fella.extra).toBe('');
});