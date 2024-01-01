// 풀이 1: 시간 초과
function solution(participant, completion) {
  const sortedParticipant = participant.sort();
  const sortedCompletion = completion.sort();

  return sortedParticipant.filter(
    (player, i) => sortedCompletion.lastIndexOf(player) !== i,
  )[0];
}

// 풀이 2
function solution(participant, completion) {
  const sortedParticipant = participant.sort();
  const sortedCompletion = completion.sort();

  return sortedParticipant.filter(
    (player, i) => player !== sortedCompletion[i],
  )[0];
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']), '정답: leo');
console.log(
  solution(
    ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
    ['josipa', 'filipa', 'marina', 'nikola'],
  ),
  '정답: vinko',
);
console.log(
  solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']),
  '정답: mislav',
);
