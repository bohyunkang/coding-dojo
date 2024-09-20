/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 풀이 1
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

// 풀이 2: 풀이 1 개선 방법
