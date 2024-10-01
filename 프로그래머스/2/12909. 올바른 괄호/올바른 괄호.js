function solution(s){
    let stack = [];
    stack.push(s[0])
    let top = 0;
    for(let i = 1; i < s.length; i++) {
        if(stack[top] == '('&& s[i] == ')') stack.pop();
        else stack.push(s[i]);
    }
    return stack.length ? false : true;
}