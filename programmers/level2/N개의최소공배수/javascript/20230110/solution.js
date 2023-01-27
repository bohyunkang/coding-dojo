function test() {
  console.log(`solution([2, 6, 8, 14]) : 168 = ${solution([2, 6, 8, 14])}`);
  console.log(`solution([1, 2, 3]) : 6 = ${solution([1, 2, 3])}`);
}
// test();

function solution(arr) {
  return arr.reduce((a, b) => lcm(a, b), 1);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
