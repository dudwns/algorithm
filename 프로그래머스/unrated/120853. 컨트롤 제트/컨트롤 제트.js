function solution(s) {
    let answer = 0;
    array = s.split(" ");
    array.forEach((v,index) => { 
        v !== "Z" ?  answer += Number(v) : answer -= array[index-1];
    });
    return answer;
}