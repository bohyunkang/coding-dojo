function solution(t, p) {
  const array = [];

  for (let i = 0; i <= t.length - p.length; i += 1) {
    array.push(t.slice(i, i + p.length));
  }

  const answer = array.filter((item) => Number(item) <= p);
  return answer.length;
}

console.log(solution('3141592', '271'), '정답: 2');
console.log(solution('500220839878', '7'), '정답: 8');
console.log(solution('10203', '15'), '정답: 3');
