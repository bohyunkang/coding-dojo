// 첫 번째 풀이
const runningSum = function(nums) {
  for (let i = 1; i < nums.length; i += 1) {
    nums[i] += nums[i - 1];
  }

  return nums;
};

// 두 번째 풀이
const runningSum2 = function(nums) {
  let total = 0;

  return nums.map(num => num += total);
};

// 세 번째 풀이
const runningSum3 = function(nums) {
  nums.reduce((acc, num, i, array) => array[i] = acc + num);

  return nums;
}
