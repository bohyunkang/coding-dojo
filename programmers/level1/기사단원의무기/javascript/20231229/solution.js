// 풀이 1
function solution(number, limit, power) {
  return Array(number)
    .fill(0)
    .map((_, i) => getDivisors(i + 1))
    .reduce((acc, cur) => (cur > limit ? acc + power : acc + cur), 0);
}

// 풀이 2
function solution(number, limit, power) {
  const knights = [];

  for (let i = 1; i <= number; i += 1) {
    knights.push(getDivisors(i));
  }

  return knights.reduce(
    (acc, cur) => (cur > limit ? acc + power : acc + cur),
    0,
  );
}

function getDivisors(num) {
  const array = [];

  for (let i = 1; i <= num / 2; i += 1) {
    if (num % i === 0) {
      array.push(i);
    }
  }

  return [...array, num].length;
}

console.log(solution(5, 3, 2), '정답: 10');
console.log(solution(10, 3, 2), '정답: 21');
console.log(solution(40, 2, 1), '정답: 52');
console.log(solution(5, 2, 1), '정답: 8');
console.log(solution(100000, 2, 1), '정답: 109592');
console.log(solution(100000, 50, 25), '정답: 1115014');
console.log(solution(1, 2, 1), '정답: 1');
console.log(solution(29, 5, 3), '정답: 86');
