let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); // 정점의 개수
let m = Number(input[1]); // 간선의 개수
let graph = []; // 빈 그래프 배열 생성
for(let i = 1; i <= n; i++) graph[i] = []; // 각 노드의 인접 리스트 공간 생성
for(let i = 2; i <= m + 1; i++) {
    let [x, y] = input[i].split(' ').map(Number);
    graph[x].push(y); // 서로의 노드에 인접 노드를 추가
    graph[y].push(x); // 서로의 노드에 인접 노드를 추가
}

let cnt = 0;
let visited = new Array(n + 1).fill(false);

function dfs(x) { // 깊이 우선 탐색(DFS) 수행
    visited[x] = true; // 현재 노드를 방문 처리
    cnt++; // 인접한 노드가 있을 때 count를 증가
    for(y of graph[x]) { // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
        if(!visited[y]) {
            dfs(y);
        }
    }
}
dfs(1);
console.log(cnt - 1); // 처음 노드는 제외