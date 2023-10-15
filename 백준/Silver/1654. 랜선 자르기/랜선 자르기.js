const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [k, n] = input[0].split(' ').map(Number);
let arr = [];
for(let i = 1; i <= k; i++) {
    arr.push(Number(input[i]));
}

let result = 0;
let start = 1;
let end = Math.max(...arr);

while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;
    for (let x of arr) {
        total += parseInt(x / mid);
    }
    if(total < n) {
        end = mid - 1;
    } else {
        result = mid;
        start = mid + 1;
    }
}
console.log(result);