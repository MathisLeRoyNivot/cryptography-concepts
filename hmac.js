const { createHmac } = require('crypto');

const key1 = "password1";
const message1 = "Special message!";

const hmac1 = createHmac('sha256', key1).update(message1).digest('hex');

const key2 = "password2";

const hmac2 = createHmac('sha256', key2).update(message1).digest('hex');

console.log(hmac1);
console.log(hmac2);