const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const c = Number(input[1]);

let totalMinute = a * 60 + b + c;
totalMinute %= 1440;
console.log(parseInt(totalMinute / 60), totalMinute % 60)