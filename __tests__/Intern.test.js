const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const goovus = new Intern('Intern', 'ordinal');

    expect(goovus.title).toBe('Intern');
    expect(goovus.id).toEqual(expect.any(Number));
});