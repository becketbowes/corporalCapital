const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    let fellah = new Engineer('poopy doop', 'Engineer', 'random',);

    expect(fellah.project).toBe('poopy doop');
    expect(fellah.title).toBe('Engineer');
    expect(fellah.id).toEqual(expect.any(Number));
});