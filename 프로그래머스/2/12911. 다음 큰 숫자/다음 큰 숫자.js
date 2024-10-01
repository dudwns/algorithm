function solution(n) {
    let cnt = n.toString(2).split('1').length - 1;
 
    while(1) {
        n++;
        let nextCnt = n.toString(2).split('1').length - 1;
        if(cnt == nextCnt) break;
    }
    return n;
}