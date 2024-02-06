function solution(clothes) {
  // 1. 옷을 종류별로 구분하기
  const map = new Map();

  for (const item of clothes) {
    const type = item[1];
    const value = map.get(type) || 0;
    map.set(type, value + 1);
  }

  // 2. 입지 않는 경우를 추가하여 모든 조합 계산하기
  let answer = 1;

  for (const value of map.values()) {
    answer *= value + 1;
  }

  // 3. 아무종류의 옷도 입지 않는 경우 제외하기
  return answer - 1;
}

console.log(
  solution([
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ]),
  '정답: 5',
);

console.log(
  solution([
    ['crow_mask', 'face'],
    ['blue_sunglasses', 'face'],
    ['smoky_makeup', 'face'],
  ]),
  '정답: 3',
);
