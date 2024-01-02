// 풀이 과정
// 1. 뽑은 인형을 담을 Stack을 준비하고 기본적으로 0을 세팅해놓는다.
// 2. moves의 길이만큼 순회하면서 board의 길이만큼 다시 순회한다.
// 2-1. 가독성을 위해 j라는 변수에 move - 1을 저장한다.
// 3. 0이 아니라면 Stack(바구니)의 가장 윗 요소와 board[i][j]가 같은지 비교한다.
// 3-1. 만약 board[i][j]이 0이라면 인형이 없는 것이기 때문에 무시한다.
// 4. 같다면 인형이 터지는 것이기 때문에 Stack에 pop을 하고 answer에 2를 더한다.
// 4-1. 옮긴 인형의 자리는 0으로 바꿔놓는다.
// 5. 다르다면 Stack에 board[i][j]를 push한다.
// 5-1. 마찬가지로 옮긴 인형의 자리는 0으로 바꿔놓는다.
// 7. answer를 리턴한다.
function solution(board, moves) {
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

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4],
  ),
  '정답: 4',
);
