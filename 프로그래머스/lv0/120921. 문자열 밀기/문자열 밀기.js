function solution(A, B) {
    let count = 0;
    const arrayA = [...A] 
    
    while(arrayA.join("") !== B){
         if(count > A.length) return -1;
       arrayA.unshift(arrayA.pop());
       count ++;
       
        console.log(arrayA.join(""),B)
    }
    return count;
}