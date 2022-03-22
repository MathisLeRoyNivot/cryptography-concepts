const { createCipheriv, createDecipheriv, randomBytes } = require('crypto');

const message = "Special message!";
const key = randomBytes(32);
const initializationVector = randomBytes(16);

// Encrypt
const cipher = createCipheriv('aes256', key, initializationVector);
const encryptedMessage = cipher.update(message, 'utf-8', 'hex') + cipher.final('hex');
console.log(`Encrypted message: ${encryptedMessage}`);

// Decrypt
const decipher = createDecipheriv('aes256', key, initializationVector);
const decyrptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf-8');
console.log(`Decrypted message: ${decyrptedMessage}`);