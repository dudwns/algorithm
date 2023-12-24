function solution(score) {
    const answer = [];
    const average = score.map((n, index) => (n[0] + n[1]) / 2 );
    let sorted = average.slice().sort((a,b) => b-a);
    return average.map((n) => sorted.indexOf(n) + 1);
}