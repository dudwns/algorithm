function solution(before, after) {
    let count = 0;
    const beforeArray = [...before];
    const afterArray = [...after];
    for(let i =0; i < before.length; i ++){
        for(let j = 0 ; j < after.length; j ++){
            if(beforeArray[i] === afterArray[j]){
                afterArray.splice(j,1);
                count ++;
                break;
            }
        }
    }
  
    return count === after.length ? 1 : 0;
}