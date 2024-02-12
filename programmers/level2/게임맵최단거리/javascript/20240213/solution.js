function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  // 방향: 아래, 오른쪽, 위, 왼쪽
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  const visited = Array.from(Array(n), () => Array(m).fill(false));

  // (row, col, steps)
  const queue = [[0, 0, 1]];

  // 시작점을 방문했다고 표시
  visited[0][0] = true;

  while (queue.length > 0) {
    const [row, col, steps] = queue.shift();

    // 만약 상대팀 진영에 도착했다면 steps 반환
    if (row === n - 1 && col === m - 1) {
      return steps;
    }

    // 이웃 탐색
    for (let [dRow, dCol] of dirs) {
      const nextRow = row + dRow;
      const nextCol = col + dCol;

      // nextRow와 nextCol이 경계에 도달하지 않은 경우 + 다음 위치가 벽이 아니고, 방문한 곳이 아니라면
      // 모든 유효성 검사를 통과했다면 방문 표시로 넣고, queue 업데이트
      if (
        nextRow >= 0 &&
        nextRow < n &&
        nextCol >= 0 &&
        nextCol < m &&
        maps[nextRow][nextCol] === 1 &&
        !visited[nextRow][nextCol]
      ) {
        visited[nextRow][nextCol] = true;
        queue.push([nextRow, nextCol, steps + 1]);
      }
    }
  }

  // 경로가 없는 경우 -1 반환
  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ]),
  '정답: 11',
);
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ]),
  '정답: -1',
);
