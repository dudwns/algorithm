const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const data = input[1].split(' ').map(Number);
let arrow = new Array(1000001).fill(0);
let answer = 0;

for(let x of data) {
    if(arrow[x] === 0) {
        arrow[x - 1] += 1;
        answer += 1;
    } else {
        arrow[x] -= 1;
        arrow[x - 1] += 1;
    }
}

console.log(answer);