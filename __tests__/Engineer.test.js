const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    let pontificus = new Engineer('Engineer', 'random',);

    expect(pontificus.title).toBe('Engineer');
    expect(pontificus.id).toEqual(expect.any(Number));
});