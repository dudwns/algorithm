function solution(a, b) {
    let result = 0;
    const arr = [];
    arr[0] = Math.min(a, b);
    arr[1] = Math.max(a, b);
    
    for(let i = arr[0]; i <= arr[1]; i ++){
        result += i;
    }

    return result;
}