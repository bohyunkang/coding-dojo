function getGcd(n, m) {
  while (m != 0) {
    const r = n % m;

    n = m;
    m = r;
  }
  return n;
}

function getLcm(n, m) {
  return (n * m) / getGcd(n, m);
}

function solution(arr) {
  return arr.reduce((acc, cur) => getLcm(acc, cur));
}

// === test ===
(function test() {
  console.log(`solution([2, 6, 8, 14]) >>> 168 ?? ${solution([2, 6, 8, 14])}`);
  console.log(`solution([1, 2, 3]) >>> 6 ?? ${solution([1, 2, 3])}`);

  console.log(`getGcd(3, 12) >>> 3 ?? ${getGcd(3, 12)}`);
  console.log(`getGcd(2, 5) >>> 1 ?? ${getGcd(2, 5)}`);

  console.log(`getLcm(3, 12) >>> 12 ?? ${getLcm(3, 12)}`);
  console.log(`getLcm(2, 5) >>> 10 ?? ${getLcm(2, 5)}`);
})();
