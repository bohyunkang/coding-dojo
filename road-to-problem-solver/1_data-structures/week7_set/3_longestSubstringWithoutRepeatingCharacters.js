// 문제 링크: https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
/**
 * 풀이 과정
 * 1. Set을 사용하여 중복을 체크
 * 2. 중복이 발견되면 start 위치부터 문자들을 제거
 * 3. 매 단계에서 Set의 크기로 최대 길이를 갱신
 */
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let start = 0;
  const charSet = new Set();

  for (let i = 0; i < s.length; i += 1) {
    const currentChar = s[i];

    // Set에 현재 문자가 있으면
    // 중복이 없어질 때까지 start 위치의 문자들을 제거
    while (charSet.has(currentChar)) {
      charSet.delete(s[start]);
      start += 1;
    }

    charSet.add(currentChar);
    maxLength = Math.max(maxLength, charSet.size);
  }

  return maxLength;
};
