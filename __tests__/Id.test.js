const Id = require('../lib/Id');

test('random returns eight digit random code', () => {
    id = Id('random');

    expect(id).toEqual(expect.any(Number));
});

test('ordinal returns three digit sequential code', () => {
    id = Id('ordinal');

    expect(id).toEqual(expect.any(Number));
});

test('ordinal increases every time it is called', () => {
    idOne = Id('ordinal');
    idTwo = Id('ordinal');
    console.log(idOne, idTwo);

    expect(idOne).toEqual(idTwo - 1);
});