// 풀이 1
// 1. 최대 지원할 수 있는 부서의 수가 담길 변수 count와 부서별로 필요한 금액을 누적해줄 변수 total 준비.
// 2. 최대한 많이 부서에 예산을 지원해야 하므로 d를 오름차순으로 정렬
// 3. for문으로 순회하며 금액을 누적하고, 만약 누적된 금액이 예산을 초과하면 바로 count를 반환
// 4. 초과하지 않으면 count를 증가시킴.
function solution(d, budget) {
  let count = 0;
  let total = 0;

  const sortedArray = d.sort((a, b) => a - b);

  for (let i = 0; i < sortedArray.length; i += 1) {
    total += sortedArray[i];

    if (total > budget) {
      return count;
    }

    count += 1;
  }

  return count;
}

// 풀이 2: forEach를 사용
// forEach는 반환값이 없으므로 위와 같이 풀이하지 못하고 뒤집어서 작업을 해야함
// 1. forEach로 배열을 순회하면서 금액을 누적
// 2. total이 예산을 아직 초과하지 않은 경우에만 count를 증가
function solution(d, budget) {
  let count = 0;
  let total = 0;

  const sortedArray = d.sort((a, b) => a - b);

  sortedArray.forEach((price) => {
    total += price;

    if (total <= budget) {
      count += 1;
    }
  });

  return count;
}

console.log(solution([1, 3, 2, 5, 4], 9), '정답: 3');
console.log(solution([2, 2, 3, 3], 10), '정답: 4');
