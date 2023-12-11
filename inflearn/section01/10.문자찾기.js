function solution(s, t) {
  const array = s.split('');

  return array.reduce((total, cur) => (cur === t ? (total += 1) : total), 0);
}

console.log(solution('COMPUTERPROGRAMMING', 'R'), '정답: 3');
