const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

let result = 0;
let start = 0;
let end = Math.max(...arr);

while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;
    for (let x of arr) {
        if(x > mid){
        total += x - mid;    
        }
    }
    if(total < m) {
        end = mid - 1;
        
    } else {
        result = mid;
        start = mid + 1;
    }
}
console.log(result);