const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
let cnt = 0;
const check = (data) => {
    const setData = new Set(data[0]);
    for(let i = 1; i < data.length; i++){
        if(data[i] !== data[i - 1]){
            if(setData.has(data[i])){
                return false;
            }
            else {
                setData.add(data[i]);
            }
        }
    }
    return true;
}

for(let i = 1; i <= n; i++){
    if(check(input[i])) cnt++;
}

console.log(cnt);