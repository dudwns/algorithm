function solution(my_string) {
    return [...my_string].map((s) => s.toLowerCase()).sort().join("");
}