const { publicEncrypt, privateDecrypt } = require('crypto');
const { publicKey, privateKey } = require('./keypair');

const message = "Confidential message!"

const encryptedData = publicEncrypt(publicKey, Buffer.from(message));
console.log(encryptedData.toString('hex'));

const decyrptedData = privateDecrypt(privateKey, encryptedData);
console.log(decyrptedData.toString('utf-8'));