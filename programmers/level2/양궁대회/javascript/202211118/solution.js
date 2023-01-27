function solution(n, info) {
  let maxDiff = 0;
  let ryanInfo = Array(11).fill(0);

  const shot = (peachScore, ryanScore, count, idx, board) => {
    if (n < count) return;
    if (idx > 10) {
      const diff = ryanScore - peachScore;
      if (diff > maxDiff) {
        board[10] = n - count;
        maxDiff = diff;
        ryanInfo = board;
      }
      return;
    }
    if (n > count) {
      const board2 = [...board];
      board2[10 - idx] = info[10 - idx] + 1;
      shot(peachScore, ryanScore + idx, count + info[10 - idx] + 1, idx + 1, board2);
    }

    if (info[10 - idx] > 0) {
      shot(peachScore + idx, ryanScore, count, idx + 1, board);
    } else {
      shot(peachScore, ryanScore, count, idx + 1, board);
    }
  };
  shot(0, 0, 0, 0, ryanInfo);

  if (maxDiff <= 0) return [-1];
  return ryanInfo;
}
