function solution(t, p) {
    let answer = 0;
    
    for(let i = 0; i <= t.length - p.length; i++) {
        let sliceT = t.slice(i, i + p.length);
        let numberT = Number(sliceT);
        if(numberT <= Number(p)) answer++;
    }
    return answer;
}