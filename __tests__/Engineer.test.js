const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    let pontificus = new Engineer('Frank', 'Frank', 'Engineer', 'random', 'grace@aol.com', '914-663-7844', 'killpixies');

    expect(pontificus.banana).toEqual('Frank');
    expect(pontificus.title).toBe('Engineer');
    expect(pontificus.github).toBe('killpixies');
});