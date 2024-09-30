let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let graph = [];
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 1; i < n; i++) {
    let [x, y, cost] = input[i].split(' ').map(Number);
    graph[x].push([y, cost]);
    graph[y].push([x, cost]);
}

function dfs(x, dist) {
    if(visited[x]) return; // 방문했으면 바로 리턴
    visited[x] = true; // 방문 처리
    distance[x] = dist; // 거리 배열에 거리 저장
    for(let [y, cost] of graph[x]) dfs(y, dist + cost); // 현재 거리에 cost를 합산해서 인접 노드를 재귀
}

for (let i = 0; i < m; i++) {
    let [x, y] = input[n + i].split(' ').map(Number); // x부터 y까지의 x, y값
    visited = new Array(n + 1).fill(false); // 방문 유무 초기화
    distance = new Array(n + 1).fill(-1); // 거리 초기화
    dfs(x, 0); // 시작 노드와 거리 0
    console.log(distance[y]); // Y까지의 최단 거리
}