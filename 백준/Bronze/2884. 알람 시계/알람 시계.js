const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let h = Number(input[0].split(' ')[0]);
let m = Number(input[0].split(' ')[1]);

if(m - 45 < 0)  {
    h = h - 1;
    m = 60 + (m - 45);
    if(h < 0) h = 23;
    console.log(h, m);
}
else    console.log(h, m - 45);