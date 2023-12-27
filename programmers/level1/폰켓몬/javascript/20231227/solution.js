// 풀이 과정
// 1. 내가 최대로 가질 수 있는 폰켓몬은 nums 개수의 반절이기 때문에 max를 구한다.
// 2. 최대한 다양하게 중복되지 않게 폰켓몬을 구해야 하므로 Set 자료구조를 활용하여 nums를 담는다.
// 3. 그렇게 해서 담긴 deduplication의 개수(size)와 max를 비교하여 작은 값을 반환한다.
// -> 작은 값을 반환하는 이유는 1) 종류가 많아도 max가 적으면 max밖에 못 가짐 2) max가 커도 종류가 적으면 그만큼밖에 못 가짐
function solution(nums) {
  const max = nums.length / 2;

  const deduplication = new Set(nums);

  return Math.min(deduplication.size, max);
}

console.log(solution([3, 1, 2, 3]), '정답: 2');
console.log(solution([3, 3, 3, 2, 2, 4]), '정답: 3');
console.log(solution([3, 3, 3, 2, 2, 2]), '정답: 2');
console.log(solution([1, 1, 1, 1]), '정답: 1');
