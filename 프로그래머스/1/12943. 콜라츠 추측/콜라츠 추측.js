function solution(num) {
    var answer = 0;
    let n = 0;
    while(num != 1 && n < 500){
        if(num % 2 == 0) num /= 2;
        else num = (num * 3) + 1;
        n++;
        
    }
    return num == 1 ? n : -1;
}