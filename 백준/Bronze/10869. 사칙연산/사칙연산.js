const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const data = input[0].split(' ');

const a = Number(data[0]);
const b = Number(data[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);