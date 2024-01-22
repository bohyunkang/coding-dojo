function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  while (arr.length >= 2) {
    let a = arr.pop();
    let b = arr.pop();
    arr.push(lcm(a, b));
  }

  return arr[0];
}

console.log(solution([2, 6, 8, 14]), '정답: 168');
console.log(solution([1, 2, 3]), '정답: 6');
