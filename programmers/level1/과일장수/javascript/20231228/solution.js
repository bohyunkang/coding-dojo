// 풀이 1 (풀이 실패 - 테케는 통과하는데 제출 시 실패;;)
function solution(k, m, score) {
  score = score.sort((a, b) => b - a).filter((apple) => apple <= k);

  let bestProduct = [];
  let answer = 0;

  if (score.length % m > 0) {
    bestProduct = score.slice(0, m);

    answer = getMargin(bestProduct, m);

    return answer;
  }

  for (let i = 0; i < score.length; i += m) {
    bestProduct = score.slice(i, i + m);

    answer += getMargin(bestProduct, m);
  }

  return answer;
}

function getMargin(array, m) {
  return array[array.length - 1] * m;
}

// 풀이 2
// 1. score 역순으로 정렬
// 2. for문 돌면서 m번째 자리수 숫자와 m과 곱해서 answer 누적한다.
function solution(k, m, score) {
  const sortedScore = score.sort((a, b) => b - a);
  let answer = 0;

  for (let i = m; i <= sortedScore.length; i += m) {
    answer += sortedScore[i - 1] * m;
  }

  return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]), '정답: 8');
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]), '정답: 33');
