function solution(arr) {
    const stk = [];
    let i = 0;
    while(i < arr.length){
        if(stk === []){
            stk.push(arr[i]);
            i++;
        } else{
            if(stk[stk.length - 1] === arr[i]){
                stk.pop();
                i++;
            }else {
                stk.push(arr[i]);
                i++;
            }
        }
    }
    return stk.length ? stk : [-1];
}