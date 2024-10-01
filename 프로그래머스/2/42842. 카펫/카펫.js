function solution(brown, yellow) {
    var answer = [];
    let sum = brown + yellow;
    for(let y = 3; y <= brown; y++) {
        let x = Math.floor(sum / y);
        if((x - 2) * (y - 2) == yellow){
            return [x, y];
        }
        
    }
}