function solution(my_string) {
    return   [...my_string].filter(s => !isNaN(s) ).map(v => +v).sort((a,b) => a - b);
}