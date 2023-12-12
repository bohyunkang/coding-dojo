// 풀이 1
function solution(n) {
  const array = Array(n)
    .fill()
    .map((_, i) => i + 1);

  const divisors = [];

  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] * array[j] === n) {
        divisors.push(array[i]);
      }
    }
  }

  const answer = divisors.reduce((total, current) => total + current, 0);

  return answer;
}

// 풀이 2: 배열을 따로 구하지 않고, 나머지가 0이 되면 sum에 누적시키는 방식으로 푼 게 인상적!
function solution(n) {
  let sum = 0;

  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      sum += i;
    }
  }

  return sum;
}
