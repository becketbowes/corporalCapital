const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const Santiago = new Intern('Santiago', 'Santiago', 'Intern', 'ordinal', 'grace@aol.com', '914-663-7844', 'Standford');

    expect(goovus.banana).toEqual('Santiago');
    expect(goovus.title).toBe('Intern');
    expect(goovus.github).toBe('Stanford');
});