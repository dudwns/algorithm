const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let flag = false;
let answer = 0;
while(n >= 0){
    if(n === 0 || n % 5 === 0) {
        answer += parseInt(n / 5);
        console.log(answer);
        flag = true;
        break;
    } 
    n -= 3;
    answer++;
}

if(!flag) console.log(-1);