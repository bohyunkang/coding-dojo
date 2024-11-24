// 문제 링크: https://leetcode.com/problems/contains-duplicate/
/**
 * @param {number[]} nums
 * @return {boolean}
 */

/**
 * [풀이 1: Set 활용]
 * Set에 nums를 저장하여 해당 Set의 갯수와 nums의 갯수가 같으면 false, 아니면 true
 * -> Set이 중복된 값 저장이 불가능한 특성을 활용.
 */
var containsDuplicate = function (nums) {
  const numsSet = new Set(nums);

  return numsSet.size !== nums.length;
};

/**
 * [풀이 2 => 시간 초과 🚨]
 * 1. 새로운 배열을 하나 만들어서 nums를 순회하며 중복되지 않은 요소는 추가
 * 2. 혹시라도 중복되는 요소가 있다면 바로 true 반환
 * 3. 순회가 끝나면 중복되는 요소가 없다는 것이니 false 반환
 */
var containsDuplicate = function (nums) {
  const copyNums = [];

  for (const num of nums) {
    if (copyNums.includes(num)) {
      return true;
    }
    copyNums.push(num);
  }

  return false;
};
