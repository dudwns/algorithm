const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
let result = '';

for(let i = 1; i <= n; i++){
    const data = input[i].split(' ');
    const a = Number(data[0]);
    const b = Number(data[1]);
    result += a + b + '\n';
}

console.log(result);