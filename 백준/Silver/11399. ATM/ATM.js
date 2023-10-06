const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

arr.sort((a, b) => a - b);

let delay = 0;
let answer = 0;
for(let i = 0; i < n; i++) {
    delay += arr[i];
    answer += delay;
}

console.log(answer);