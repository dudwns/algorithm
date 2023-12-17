function solution(i, j, k) {
    let a = "";
    for(let n = i; n <= j; n ++){
        a += n;
    }
    return a.split(k).length - 1;
}