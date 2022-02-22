const Member = require('../lib/Member');

test('creates a member object', () => {
    let gandhi = new Member('Web7.8.0.1', 'Engineer', 'random',);

    expect(gandhi.project).toBe('Web7.8.0.1');
    expect(gandhi.title).toBe('Engineer');
    expect(gandhi.id).toEqual(expect.any(Number));
    expect(gandhi.kind).toBe("");
});