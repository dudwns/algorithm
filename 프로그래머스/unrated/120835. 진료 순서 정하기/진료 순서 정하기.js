function solution(emergency) {
    const rank = [...emergency];
    rank.sort((a, b) => (b - a));
    return emergency.map((n) => rank.indexOf(n) + 1 );    
}