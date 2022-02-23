const Intern = require('../lib/Member');

test('creates an intern object', () => {
    let fellah = new Intern('Paulie Girl', 'Engineer', 'shit@poop.scat', '458-663-7183', 'random');

    expect(fellah.personName).toBe('Paulie Girl');
    expect(fellah.position).toBe('Engineer');
    expect(fellah.id).toEqual(expect.any(Number));
    expect(fellah.phone).toBe('458-663-7183');
    expect(fellah.email).toBe('shit@poop.scat');
});