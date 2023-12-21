// filter 메서드를 사용해서 만약 이전 요소와 값이 같지 않은 값만 반환한다.
function solution(arr) {
  return arr.filter((num, i) => num !== arr[i - 1]);
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]), '정답: [1, 3, 0, 1]');
console.log(solution([4, 4, 4, 3, 3]), '정답: [4, 3]');
