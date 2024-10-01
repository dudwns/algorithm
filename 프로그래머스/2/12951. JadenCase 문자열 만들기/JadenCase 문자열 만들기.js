function solution(s) {
    let str = s.split(' ');
    for(let i = 0; i < str.length; i++) {
        if(str[i].length) {
            str[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase(); 
        } 
    }
    return str.join(' ');
}