// 풀이 과정
// 1. 네번째 줄인 *, 0, # 은 10, 11, 12로 치환하여 생각한다.
// 2. 직전의 왼손, 오른손의 위치를 저장하는 변수 leftIndex, rightIndex를 선언한다.
// 3. 만약 번호가 1, 4, 7 또는 3, 6, 9라면 바로 L, 또는 R
// 4. 만약 번호가 2, 5, 8, 0인 경우, 왼쪽 오른쪽 거리 비교를 하여 더 가까운 위치로 저장한다.
// 5. 절댓값을 기준으로 거리를 구해서 x, y 좌표의 거리 차를 합하여 리턴하는 getLength 함수를 만든다.
// 5-1. 위 아래로 움직일 때는 /3, 좌우로 움직이는 거리는 %3
function solution(numbers, hand) {
  let answer = '';
  let leftIndex = 10;
  let rightIndex = 12;

  numbers.forEach((number) => {
    if (number === 1 || number === 4 || number === 7) {
      answer += 'L';
      leftIndex = number;
      return;
    }

    if (number === 3 || number === 6 || number === 9) {
      answer += 'R';
      rightIndex = number;
      return;
    }

    const leftLength = getLength(leftIndex, number);
    const rightLength = getLength(rightIndex, number);

    if (leftLength > rightLength) {
      answer += 'R';
      rightIndex = number;
      return;
    }

    if (leftLength < rightLength) {
      answer += 'L';
      leftIndex = number;
      return;
    }

    if (hand === 'right') {
      answer += 'R';
      rightIndex = number;
      return;
    }

    if (hand === 'left') {
      answer += 'L';
      leftIndex = number;
    }
  });

  return answer;
}

function getLength(index, number) {
  index = index === 0 ? 11 : index;
  number = number === 0 ? 11 : number;

  return (
    Math.floor(Math.abs(index - number) / 3) + (Math.abs(index - number) % 3)
  );
}

console.log(
  solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'),
  '정답: LRLLLRLLRRL',
);
console.log(
  solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'),
  '정답: LRLLRRLLLRR',
);
console.log(
  solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'),
  '정답: LLRLLRLLRL',
);
