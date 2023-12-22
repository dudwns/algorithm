function solution(numbers) {
    const numStr = ["zero","one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = 0;
    numStr.forEach((str, index) => {
        numbers = numbers.replaceAll(str, index);
    })
    return Number(numbers);
}