const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const arr = input[1].split('').map(Number);

console.log(arr.reduce((a, b) => a + b));