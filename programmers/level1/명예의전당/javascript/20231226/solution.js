// 풀이 1
// 1. k만큼의 점수를 담을 명예의 전당 listK와 매일의 최하위 점수를 담을 answer를 만든다.
// 2. for문을 돌면서 만약 i가 k보다 적을 경우, 배열이 k만큼 담기지 않았으므로 listK에 score를 담아준다.
// 3. 이때 바로 listK를 내림차순으로 정렬하고, 최하위 점수를 answer에도 담아준다.
// 4. listK에 k만큼 다 담긴 후부터는 매번 점수를 비교하여 리스트에 있는 최하위 점수보다 높은 점수가 나오게 되는 경우,
// 해당 최하위 점수를 빼고(pop), 높은 점수를 넣어준다(push). 그 후 바로 list를 내림차순 정렬해준다.
// 5. 그렇게 정렬된 list의 최하위 점수를 answer에 담아준다.
function solution(k, score) {
  const listK = [];
  const answer = [];

  for (let i = 0; i < score.length; i += 1) {
    if (i < k) {
      listK.push(score[i]);
      listK.sort((a, b) => b - a);
      answer.push(Math.min(...listK));
      continue;
    }

    if (listK[listK.length - 1] <= score[i]) {
      listK.pop();
      listK.push(score[i]);
      listK.sort((a, b) => b - a);
    }

    answer.push(Math.min(...listK));
  }

  return answer;
}

// 풀이 1-2
// 생각해보니까 어차피 리스트를 매번 내림차순 정렬해주기 때문에 Math.min()대신 리스트의 마지막 값을 answer에 push해주면 된다.
function solution(k, score) {
  const listK = [];
  const answer = [];

  for (let i = 0; i < score.length; i += 1) {
    if (i < k) {
      listK.push(score[i]);
      listK.sort((a, b) => b - a);
      answer.push(listK[listK.length - 1]);
      continue;
    }

    if (listK[listK.length - 1] <= score[i]) {
      listK.pop();
      listK.push(score[i]);
      listK.sort((a, b) => b - a);
    }

    answer.push(listK[listK.length - 1]);
  }

  return answer;
}

console.log(
  solution(3, [10, 100, 20, 150, 1, 100, 200]),
  '정답: [10, 10, 10, 20, 20, 100, 100]',
);
console.log(
  solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]),
  '정답: [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]',
);
