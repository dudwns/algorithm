function solution(s) {
    let answer = [];
    let str = s.split(' ');
    for (word of str) {
        let keyword = '';
        for(let i = 0; i < word.length; i++) {
            if(i == 0) {
                keyword += word[i].toUpperCase(); 
            }
            else {
                keyword += word[i].toLowerCase(); 
            }
        } answer.push(keyword);
    }
    return answer.join(' ');
}