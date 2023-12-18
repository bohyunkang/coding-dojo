function solution(left, right) {
  const array = Array(right - left + 1)
    .fill()
    .map((_, i) => i + left);

  return array.reduce(
    (acc, cur) => (isDivisorsEven(cur) ? acc + cur : acc - cur),
    0,
  );
}

function isDivisorsEven(num) {
  const divisors = [];

  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }

  return divisors.length % 2 === 0;
}

console.log(solution(13, 17), '정답: 43');
console.log(solution(24, 27), '정답: 52');
