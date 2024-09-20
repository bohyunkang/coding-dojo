/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * 풀이 1
 * 1. 배열을 순회하며 0이 아닌 요소를 찾는다.
 * 2. 0이 아닌 요소를 발견하면 배열의 앞쪽(nonZeroIndex 위치)으로 이동시킨다.
 * 3. 이 과정을 반복하여 모든 0이 아닌 요소를 앞으로 모으고, 결과적으로 0은 뒤로 밀려난다.
 */
var moveZeroes = function (nums) {
  let nonZeroIndex = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== 0) {
      let temp = nums[nonZeroIndex];
      nums[nonZeroIndex] = nums[i];
      nums[i] = temp;

      nonZeroIndex += 1;
    }
  }
};

// 풀이 2: 풀이 1 개선 방법 -> temp 변수 제거 및 구조분해할당 활용
var moveZeroes = function (nums) {
  let nonZeroIndex = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== 0) {
      [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];

      nonZeroIndex += 1;
    }
  }
};
