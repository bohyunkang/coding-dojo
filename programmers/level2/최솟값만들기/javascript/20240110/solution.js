/**
 * [풀이 과정]
 * 최적의 해: 작은수 * 큰 수를 해야 최솟값이 나온다.
 * A는 내림차순, B는 오름차순으로 sort한다.
 * reduce로 순회하며 모든 요소를 곱한 값을 누적하여 반환한다.
 */
function solution(A, B) {
  const descA = A.sort((a, b) => b - a);
  const ascB = B.sort((a, b) => a - b);

  return descA.reduce((acc, cur, i) => (acc += cur * ascB[i]), 0);
}

console.log(solution([1, 4, 2], [5, 4, 4]), '정답: 29');
console.log(solution([1, 2], [3, 4]), '정답: 10');
