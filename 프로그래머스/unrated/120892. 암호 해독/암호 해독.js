function solution(cipher, code) {
    return [...cipher].filter((s, index) => (index+1) % code === 0 ).join("") ;
}