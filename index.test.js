const {hashPassword} = require('./index.js');
const bcrypt = require('bcrypt');

test('returns a string', async () => {
    const password = 'nobody ever knew';
    const hashed = await hashPassword(password);
    expect(hashed).toBeTruthy();
    expect(typeof hashed).toBe('string');
});

test('does not return plaintext password', async () => {
    const password = 'nobody ever knew';
    const hashed = await hashPassword(password);
    expect(hashed).not.toEqual(password);
});


test('hashes password', async () => {
    const password = 'nobody ever knew';
    const hashed = await hashPassword(password);
    expect(await bcrypt.compare(password, hashed)).toBe(true)
});