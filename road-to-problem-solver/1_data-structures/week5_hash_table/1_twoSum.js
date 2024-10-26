// 문제 링크: https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * 풀이 1
 * for문을 두번 순회
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 1; j < nums.length; j += 1) {
      if (i !== j) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
};

/**
 * 풀이 2
 * for문을 한번 순회 & 객체 활용
 */
var twoSum = function (nums, target) {
  const numObj = {}; // 숫자와 인덱스를 저장할 객체

  for (let i = 0; i < nums.length; i += 1) {
    const needed = target - nums[i]; // 현재 숫자와 더해서 target이 되는 값

    // 필요한 값이 객체에 있다면 정답 반환
    if (needed in numObj) {
      return [numObj[needed], i];
    }

    // 현재 숫자와 인덱스를 객체에 저장
    numObj[nums[i]] = i;
  }
};

/**
 * 풀이 3
 * for문을 한번 순회 & Map 사용
 */
var twoSum = function (nums, target) {
  const numMap = new Map(); // 숫자와 인덱스를 저장할 Map

  for (let i = 0; i < nums.length; i += 1) {
    const needed = target - nums[i]; // 현재 숫자와 더해서 target이 되는 값

    // 필요한 값이 Map에 있다면 정답 반환
    if (numMap.has(needed)) {
      return [numMap.get(needed), i];
    }

    // 현재 숫자와 인덱스를 Map에 저장
    numMap.set(nums[i], i);
  }
};
