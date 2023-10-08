const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const s = Number(input[0]);

let n = 0;
let sum = 0;
while(sum <= s) {
    n++;
    sum += n;
}
console.log(n - 1);