let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCases = Number(input[0]);
let line = 1;

function dfs(graph, m, n, x, y){
    if(x < 0 || x >= n || y < 0 || y >= m) return false;
    if(graph[x][y] == 1) {
        graph[x][y] = -1;
        dfs(graph, m, n, x - 1, y);
        dfs(graph, m, n, x, y - 1);
        dfs(graph, m, n, x + 1, y);
        dfs(graph, m, n, x, y + 1);
        return true;
    }
    return false;
}

while(testCases--) {
    let graph = [];
    let [m, n, k] = input[line].split(' ').map(Number);
    for(let i = 0; i < n; i++) {
        graph[i] = new Array(m);
    }
    for(let i = 1; i <= k; i++) {
        let [x, y] = input[line + i].split(' ').map(Number);
        graph[y][x] = 1;
    }
    let answer = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(dfs(graph, m, n, i, j)) answer++;
        }
    }
    line += k + 1;
    console.log(answer);
}