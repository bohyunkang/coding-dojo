/**
 * @param {number[]} height
 * @return {number}
 */
/**
  풀이 1: brute force 방식으로 모든 가능한 조합 확인하기(반복문 2번 사용)
  => 🚨 Time Limit Exceeded(54 / 62 testcases passed)

  1. 두 선의 거리를 계산
  2. 두 선의 더 낮은 선의 높이를 찾는다.
  3. 물의 양을 계산한다.(물의 양 = 두 선의 거리 * 더 낮은 선 높이)
  4. 지금까지 찾은 최대 물의 양을 업데이트한다.
 */
var maxArea = function (height) {
  let answer = 0;

  for (let i = 0; i < height.length; i += 1) {
    for (let j = i + 1; j < height.length; j += 1) {
      const width = j - i;
      const minHeight = Math.min(height[i], height[j]);
      const water = width * minHeight;

      if (water > answer) {
        answer = water;
      }
    }
  }

  return answer;
};

/**
  풀이 2: 반복문 한번만 사용하는 것으로 개선. 투 포인터 방식

  1. 배열을 양 끝을 각 포인터로 삼는다.
  2. 안쪽으로 들어오면서 물의 양을 많이 담을 수 있는 선을 찾는다.
  3. 이때 선택된 두 포인터 중 낮은 것을 이동시킨다.
    -> 높은 쪽을 유지하면서 더 높은 선을 찾을 수 있음.
 */
var maxArea = function (height) {
  let answer = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(height[left], height[right]);
    const water = width * minHeight;

    if (water > answer) {
      answer = water;
    }

    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return answer;
};
