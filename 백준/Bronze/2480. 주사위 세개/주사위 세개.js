const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [a, b, c] = input[0].split(' ').map(Number);

if(a === b && a === c) console.log(10000 + a * 1000);
else if(a === b || a === c) console.log(1000 + a * 100);
else if(b === c) console.log(1000 + b * 100);
else console.log(Math.max(a, b, c) * 100);