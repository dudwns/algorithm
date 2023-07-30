// 이전에 등장했던 단어를 말하면 탈락, 끝단어로 시작하는 단어를 말하지 않으면 탈락
// 사람의 수 n, 순서대로 말한 단어 words
// [가장 먼저 탈락하는 사람의 번호, 몇 번째 차례에 탈락했는지] 순서로 리턴
// 만약 탈락자가 생기지 않으면 [0, 0] 리턴

function solution(n, words) {
    const prevWords = [words[0]];
    const result = [];
    let num = 1;
    
    for(let i = 1; i < words.length; i ++){
        // 현재 해당하는 사람의 번호를 지정
        num = num < n ? num + 1 : 1;
        
        const prevWord = prevWords[prevWords.length - 1] // 직전 단어
        const crtWord = words[i]; // 현재 단어
            
        // 말한 단어가 등장했거나 직전 단어의 마지막 글자와 현재 단어의 첫 글자가 다를 때 탈락 
        if(prevWords.includes(crtWord) || prevWord[prevWord.length-1] !== crtWord[0] ){    
            result.push(num);
            result.push(Math.ceil((i + 1) / n));  // 두 번째 부터 시작했으니 i에 1을 더함
            break;
        }
        
        // 등장 단어 배열에 현재 단어를 push
        prevWords.push(crtWord);
    }
  
    return result.length === 0 ? [0, 0] : result;
}