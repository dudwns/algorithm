const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const arr = input[0].split(' ').map(Number);
arr.sort((a, b) => a - b);

let answer = '';
for(let i = 0; i < arr.length; i ++) {
    answer += arr[i] + ' ';
}
console.log(answer);