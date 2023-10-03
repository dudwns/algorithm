const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const str = input[0].trim().split(' ');

if (str[0] === ''){
    console.log(0);
}
else {
    console.log(str.length);
}