const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    let fellah = new Manager('random', 'office');
    fellah.person = 'Paulie Girl'; 
    fellah.position = 'Engineer';
    fellah.email = 'shit@poop.scat';
    fellah.phone = '458-663-7183';

    expect(fellah.person).toBe('Paulie Girl');
    expect(fellah.position).toBe('Engineer');
    expect(fellah.id).toEqual(expect.any(Number));
    expect(fellah.phone).toBe('458-663-7183');
    expect(fellah.email).toBe('shit@poop.scat');
    expect(fellah.office).toBe('office');
});