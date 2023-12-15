// 풀이 1
function solution(a, b) {
  if (a === b) {
    return a;
  }

  if (b < a) {
    return getSum(b, a);
  }

  return getSum(a, b);
}

function getSum(a, b) {
  return Array(b - a + 1)
    .fill()
    .map((_, i) => a + i)
    .reduce((acc, cur) => acc + cur, 0);
}

// 풀이 2
function solution(a, b) {
  const max = Math.max(a, b);
  const min = Math.min(a, b);

  if (max === min) {
    return max;
  }

  return getSum(min, max);
}

function getSum(a, b) {
  return Array(b - a + 1)
    .fill()
    .map((_, i) => a + i)
    .reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(3, 5), '정답: 12');
console.log(solution(3, 3), '정답: 3');
