// 문제 링크: https://leetcode.com/problems/longest-consecutive-sequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 풀이 과정
 * 1. 각 숫자에 대해 검사할 때, 해당 숫자가 수열의 시작점인 경우만 검사.
 * 2. 숫자 n이 수열의 시작점이라면 n-1은 Set에 존재하지 않아야 함.
 * 3. 수열의 시작점을 찾으면, 연속된 다음 숫자가 존재하는지 확인하며 길이를 계산.
 * 4. 가장 긴 수열의 길이를 저장하고 최종적으로 반환.
 */
var longestConsecutive = function (nums) {
  // 빈 배열이면 0 반환
  if (nums.length === 0) return 0;

  // 배열의 모든 숫자를 Set에 저장
  const numsSet = new Set(nums);
  let maxLength = 1;

  // 각 숫자에 대해 연속된 수열 검사
  for (let num of numsSet) {
    // 현재 숫자가 수열의 시작점인 경우만 검사
    // num-1이 존재한다면 이는 시작점이 아님
    if (!numsSet.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      // 연속된 다음 숫자가 존재하는지 확인
      while (numsSet.has(currentNum + 1)) {
        currentNum += 1;
        currentLength += 1;
      }

      // 최대 길이 업데이트
      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
};
