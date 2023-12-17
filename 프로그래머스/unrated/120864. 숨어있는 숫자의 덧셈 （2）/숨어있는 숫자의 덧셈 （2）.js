function solution(my_string) {
    let answer = 0;
    const regex = /[a-z]/gi;
    let str = my_string.replaceAll(regex, " ").split(" ");
    str.forEach((v) => Number(v) ? answer += Number(v) : null );
    return answer;
}