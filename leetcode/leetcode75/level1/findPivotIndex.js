const pivotIndex = function(nums) {
  let totalSum = nums.reduce((acc, cur) => acc + cur, 0);
  let leftSum = 0;
  let pivot = 0;

  for (let i = 0; i < nums.length; i += 1)  {
    pivot = i;
    totalSum -= nums[i];

    if (totalSum === leftSum) {
      return pivot;
    }
    
    leftSum += nums[i];
  }

  return -1;
};
