

function solution(n) {
    let answer = 0;
    let end = Math.sqrt(n);
    
    // 모든 숫자를 true로 생성
    const array = new Array(n + 1).fill(true);
    
    for(let i = 2; i <= end; i++){
        // 이미 지워졌으면 건너 뛴다.
        if(array[i] === false) continue;
        
        // 자기 자신을 제외한 i의 배수들을 지운다.
        for( let j = i * i; j <= n; j += i){
            array[j] = false;
        }
    }
    
    // 지워지지 않은 것들을 카운트
    for (let i = 2; i <= n; i++){
        if(array[i] === true) answer++;
    }
    return answer;
}