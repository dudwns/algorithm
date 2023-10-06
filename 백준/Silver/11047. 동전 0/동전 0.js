const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, k] = input[0].split(' ').map(Number);

let answer = 0;
for(let i = n; i >= 1; i--) {
    const coin = Number(input[i]);
    if(parseInt(k / coin) !== 0){
        answer += parseInt(k / coin);
        k = k % coin;
    }
}
console.log(answer);