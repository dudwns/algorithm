const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);

function palindrome(s) {
    return s === s.split('').reverse().join('');
}

for(let i = 1; i <= n; i++) {
    let data = input[i];
    if(palindrome(data)) console.log(0);
    else {
        let found = false;
        let n = data.length;
        for(let j = 0; j < parseInt(n / 2); j++){
            if(data[j] !== data[n - j - 1]){
                if(palindrome(data.slice(0, j) + data.slice(j + 1, n))) found = true;
                if(palindrome(data.slice(0, n - j - 1) + data.slice(n - j))) found = true;
                break;
            }
        }
        if(found) console.log(1);
        else console.log(2);
    }
}