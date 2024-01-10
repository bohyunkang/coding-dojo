function solution(s) {
  const numbers = s.split(' ');

  return `${Math.min(...numbers)} ${Math.max(...numbers)}`;
}

console.log(solution('1 2 3 4'), '정답: 1 4');
console.log(solution('-1 -2 -3 -4'), '정답: -4 -1');
console.log(solution('-1 -1'), '정답: -1 -1');
