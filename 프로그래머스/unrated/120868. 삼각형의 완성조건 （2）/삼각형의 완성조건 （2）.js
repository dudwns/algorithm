function solution(sides) {
    let answer = 0;
    let max = Math.max(...sides);
    let min = Math.min(...sides);
    for(let i = 1; i <= max; i++){
        if(i+min > max){
            answer++;
        }
    }
    for(let i = max + 1; i < max+min; i ++){
        answer++;
    }
    return answer;
}