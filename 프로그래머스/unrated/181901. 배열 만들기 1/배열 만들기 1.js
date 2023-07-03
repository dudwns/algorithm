function solution(n, k) {
    const answer = [];
    for(let i = 1; i <= n; i++){
        i % k ? null : answer.push(i); 
    }
    return answer;
}