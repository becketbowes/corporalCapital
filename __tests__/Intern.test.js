const Intern = require('../lib/Member');

test('creates an intern object', () => {
    let fellah = new Intern('random', 'something');
    fellah.person = 'Paulie Girl'; 
    fellah.position = 'Engineer';
    fellah.email = 'shit@poop.scat';
    fellah.phone = '458-663-7183';
    fellah.school = 'something';
    
    expect(fellah.person).toBe('Paulie Girl');
    expect(fellah.id).toEqual(expect.any(Number));
    expect(fellah.email).toBe('shit@poop.scat');
    expect(fellah.school).toBe('something');
    expect(fellah.position).toBe('Engineer');
});