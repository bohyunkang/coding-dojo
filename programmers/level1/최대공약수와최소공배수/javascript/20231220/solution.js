// 지난번에도 풀었는데, 여전히 공식을 못외웠다. 이번 기회에 꼭 외우자!
// 참고 블로그: https://st-lab.tistory.com/154
function solution(n, m) {
  const gcd = getGcd(n, m);
  const lcm = (n * m) / gcd;

  return [gcd, lcm];
}

function getGcd(a, b) {
  if (b === 0) return a;

  return getGcd(b, a % b);
}
