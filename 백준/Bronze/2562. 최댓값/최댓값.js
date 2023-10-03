const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const arr = input.map(Number);
const max = Math.max(...arr);
console.log(max);
console.log(arr.indexOf(max) + 1);