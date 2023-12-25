// 풀이 1: for문 사용
function solution(array, commands) {
  const answer = [];

  for (let i = 0; i < commands.length; i += 1) {
    const start = commands[i][0] - 1;
    const end = commands[i][1];
    const k = commands[i][2] - 1;

    const sortedArray = array.slice(start, end).sort((a, b) => a - b);
    answer.push(sortedArray[k]);
  }

  return answer;
}

// 풀이 2: reduce 사용
function solution(array, commands) {
  return commands.reduce((acc, command) => {
    const start = command[0] - 1;
    const end = command[1];
    const k = command[2] - 1;

    const sortedArray = array.slice(start, end).sort((a, b) => a - b);

    return [...acc, sortedArray[k]];
  }, []);
}

// 풀이 3: map 사용
function solution(array, commands) {
  return commands.map((command) => sliceAndSort(array, command));
}

function sliceAndSort(array, command) {
  const start = command[0] - 1;
  const end = command[1];
  const k = command[2] - 1;

  return array.slice(start, end).sort((a, b) => a - b)[k];
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ],
  ),
  '정답: [5, 6, 3]',
);
