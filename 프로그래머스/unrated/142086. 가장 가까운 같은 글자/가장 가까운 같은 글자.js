function solution(s) {
    const result = [-1];
  
    for(let i = 1; i < s.length; i++){
        let front = 0;
        for(let j = i - 1; j >= 0; j--) {
            front++;
            if(s[i] === s[j]){
                result.push(front);
                break;
            }
            if( j === 0 ) result.push(-1);
        }  
    }
    
    return result;
}