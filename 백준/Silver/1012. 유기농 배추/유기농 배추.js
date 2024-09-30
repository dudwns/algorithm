let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function dfs(graph, n, m, x, y) {
    // 주어진 범위를 벗어나는 경우에는 즉시 종료
    if(x <= -1 || x >= n || y <= -1 || y >= m ) return false;
    if(graph[x][y] == 1) { // 현재 노드를 아직 처리하지 않았다면
        graph[x][y] = -1; // 해당 노드를 방문 처리
        dfs(graph, n, m, x - 1, y);
        dfs(graph, n, m, x, y - 1);
        dfs(graph, n, m, x + 1, y);
        dfs(graph, n, m, x, y + 1);
        return true;
    }
    return false;
}

let testCases = Number(input[0]);
let line = 1;
while(testCases--) {
    // 가로 길이 m, 세로 길이 n, 배추가 심어져 있는 위치의 개수 k
    let [m, n, k] = input[line].split(' ').map(Number);
    let graph = [];
    for(let i = 0; i < n; i++) {
        graph[i] = new Array(m); // 2차원 배열 초기화
    }
    for(let i = 1; i <= k; i++) {
        let [y, x] = input[line + i].split(' ').map(Number);
        graph[x][y] = 1;
    }
    let answer = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(dfs(graph, n, m, i, j)) answer++;
        }
    }
    line += k + 1;
    console.log(answer);
}