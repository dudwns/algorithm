function solution(balls, share) {
    return factorial(balls) / (factorial(balls-share) * factorial(share));
}

function factorial(num) {
    let returnFactorial = BigInt(1);
    for( let i = 2; i <= num; i ++){
       returnFactorial *= BigInt(i);
    }
    return returnFactorial;
}