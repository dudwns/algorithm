function solution(nums) {
    let arr = [];
    let prime = 0;
    let count = 0;
    
    for(let i = 0; i < nums.length; i++){
        for (let j = i + 1 ; j < nums.length; j++){
            for(let k = j + 1; k < nums.length; k++){
                let sum = nums[i] + nums[j] + nums[k];
                
                // 2를 제외한 2의 배수는 소수가 아니다.
                if(sum % 2 !== 0){
                   arr.push(sum); 
                    
                // 만약 7이면 1 ~ 7까지 나눈다.
                for(let n = 1; n <= arr[0]; n++ ){
                    if(arr % n === 0) prime++;
                    }
                }
                
                // 나누어지는 수가 2개면 소수
                if( prime === 2) count++;
                
                // 값 초기화
                arr=[];
                prime = 0;
            }
        }
    }
    return count;
}