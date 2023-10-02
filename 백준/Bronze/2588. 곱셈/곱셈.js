const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const a = input[0];
const b = input[1];

const x_1 = b[2];
const x_2 = b[1];
const x_3 = b[0];

console.log(Number(a) * Number(x_1));
console.log(Number(a) * Number(x_2));
console.log(Number(a) * Number(x_3));
console.log(Number(a) * Number(b));