const Member = require('../lib/Member');

test('creates a member object', () => {
    let fellah = new Member('random', 'extra');
    fellah.person = 'Paulie Girl'; 
    fellah.position = 'Engineer';
    fellah.email = 'shit@poop.scat';
    fellah.phone = '458-663-7183';

    expect(fellah.person).toBe('Paulie Girl');
    expect(fellah.position).toBe('Engineer');
    expect(fellah.id).toEqual(expect.any(Number));
    expect(fellah.phone).toBe('458-663-7183');
    expect(fellah.email).toBe('shit@poop.scat');
});