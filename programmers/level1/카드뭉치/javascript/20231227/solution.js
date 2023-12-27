// 풀이 과정
// 1. goal의 length만큼 반복문을 순회하면서
// 2. cards1[0]과 cards2[0]이 goal[i]와 다르다면 No 반환
// 3. goal[i]와 cards1[0] cards2[0] 비교하면서 같다면 해당 배열 첫번째 값 shift
// 4. cards1과 cards2의 배열이 빈 배열이 될 때까지 반복!
function solution(cards1, cards2, goal) {
  for (let i = 0; i < goal.length; i += 1) {
    if (cards1[0] !== goal[i] && cards2[0] !== goal[i]) {
      return 'No';
    }

    if (cards1.length + cards2.length === 0) {
      break;
    }

    if (goal[i] === cards1[0]) {
      cards1.shift();
      continue;
    }

    if (goal[i] === cards2[0]) {
      cards2.shift();
    }
  }

  return 'Yes';
}

console.log(
  solution(
    ['i', 'drink', 'water'],
    ['want', 'to'],
    ['i', 'want', 'to', 'drink', 'water'],
  ),
  '정답: Yes',
);
console.log(
  solution(
    ['i', 'water', 'drink'],
    ['want', 'to'],
    ['i', 'want', 'to', 'drink', 'water'],
  ),
  '정답: No',
);
