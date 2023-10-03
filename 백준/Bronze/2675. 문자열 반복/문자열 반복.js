const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);

for(let i = 1; i <= n; i ++){
    let result = '';
    const data = input[i].split(' ');
    for(let j = 0; j < data[1].length; j++){
        result += data[1][j].repeat(data[0]);
    }
    console.log(result)
}