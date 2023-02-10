function solution(m, n, board) {
  board = board.map(v => v.split(''));

  while (true) {
    let founded = [];

    // 찾기
    for (let i = 1; i < m; i += 1) {
      for (let j = 1; j < n; j += 1) {
        if (board[i][j] 
          && board[i][j] === board[i][j - 1] 
          && board[i][j] === board[i - 1][j - 1] 
          && board[i][j] === board[i - 1][j]) {
          founded.push([i, j]);
        }
      }
    }

    if (!founded.length) {
      return [].concat(...board).filter(v => !v).length;
    }

    // 부수기
    founded.forEach(a => {
      board[a[0]][a[1]] = 0;
      board[a[0]][a[1] - 1] = 0;
      board[a[0] - 1][a[1] - 1] = 0;
      board[a[0] - 1][a[1]] = 0;
    });

    // 재정렬
    for (let i = m - 1; i > 0; i--) {
      if (!board[i].some(v => !v)) {
        continue;
      }

      for (let j = 0; j < n; j += 1) {
        for (let k = i - 1; k >= 0 && !board[i][j]; k -= 1) {
          if (board[k][j]) {
            board[i][j] = board[k][j];
            board[k][j] = 0;
            break;
          }
        }
      }
    }
  }
}