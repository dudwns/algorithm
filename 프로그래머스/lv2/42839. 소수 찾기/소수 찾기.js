// 종이 조각을 붙여서 소수를 몇 개 만들 수 있는지 알아내는 문제

function solution(numbers) {
    const numArr = numbers.split("");
    const prime = []
    
    
    // 소수인지 판별하는 함수
    function isPrime(num){
        if( num <= 1) return false;
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0) return false;
        }
        return true;
    }
    
    // arr는 아직 조합되지 않은 숫자 조각의 배열
    // fixed는 이전까지 조합된 숫자 조각들
    const dfs = (arr, fixed) => {
        if(arr.length >= 1){
            for(let i = 0; i < arr.length; i++){
                const newNum = fixed + arr[i];
                const copyArr = [...arr];
                copyArr.splice(i, 1);
                if(!prime.includes(+newNum) && isPrime(newNum)){
                    prime.push(+newNum)
                }
                
                dfs(copyArr, newNum);
            }
        }
    }    
    
    dfs(numArr, '');

    return prime.length;
}