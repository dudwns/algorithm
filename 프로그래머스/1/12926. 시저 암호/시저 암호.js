function solution(s, n) {
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    var answer = '';
    
    for(let i = 0; i < s.length; i++) {
        let text = s[i];
        if(text === ' ') {
            answer += ' ';
            continue;
        }
        let alphaArr = upper.includes(text) ? upper : lower;
        let index = alphaArr.indexOf(text) + n;
        if(index >= alphaArr.length) index -= alphaArr.length;
        answer += alphaArr[index];
    }
    return answer;
}