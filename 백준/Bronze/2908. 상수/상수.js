const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [a, b] = input[0].split(' ');

const reverseStr = (s) => {
    return s.split('').reverse().join('');
}

const max = (Math.max(Number(reverseStr(a)), Number(reverseStr(b))));

console.log(max);