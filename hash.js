const { createHash } = require('crypto');

let hash = (input) => createHash('sha256').update(input).digest('hex');

let password = "ThisIsMyPassw0rd!";
const passwordHash1 = hash(password);
console.log(`Password hash: ${passwordHash1}`);

password = "ThisIsMyNewPassw0rd!";
const passwordHash2 = hash(password);
console.log(passwordHash1 === passwordHash2 ? `${String.fromCodePoint('0x2705')} passwords match` : `${String.fromCodePoint('0x274C')} password doesn't match`)