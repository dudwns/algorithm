function solution(x) {
    let sum = 0;
    let n = String(x);
    for(let i = 0; i < n.length; i++) {
        sum += Number(n[i]);
    }
    return x % sum ? false : true;
}