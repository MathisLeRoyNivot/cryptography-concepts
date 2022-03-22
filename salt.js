const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

let users = [];

let signup = (email, password) => {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword  = scryptSync(password, salt, 64).toString('hex');

    const user = { email, password: `${salt}:${hashedPassword}` }

    users.push(user);

    return user;
}

let login = (email, password) => {
    const user = users.find(u => u.email === email);

    const [salt, key] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);

    const keyBuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer); 

    return match ? `Successful login ${String.fromCodePoint('0x2705')}` : `Login failed ${String.fromCodePoint('0x274C')}`
}

const email = "email@example.com";
const password = "ThisIsMyPassword!";

signup(email, password);

const login1 = login(email, password);
const login2 = login(email, "randomPassword");

console.log(login1);
console.log(login2);