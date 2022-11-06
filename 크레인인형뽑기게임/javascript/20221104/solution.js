export default function solution(board, moves) {
  let answer = 0;

  const stack = [0];

  moves.forEach((move) => {
    const j = move - 1;

    for (let i = 0; i < board.length; i += 1) {
      if (board[i][j] > 0) {
        if (stack[stack.length - 1] === board[i][j]) {
          stack.pop();
          answer += 2;
          board[i][j] = 0;
          break;
        }

        stack.push(board[i][j]);
        board[i][j] = 0;
        break;
      }
    }
  });

  return answer;
}
