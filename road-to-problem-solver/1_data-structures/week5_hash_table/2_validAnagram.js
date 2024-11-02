// 문제 링크: https://leetcode.com/problems/valid-anagram/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 길이가 다르면 애너그램이 될 수 없음
  if (s.length !== t.length) {
    return false;
  }

  const wordMap = new Map();

  // s의 각 문자의 갯수를 카운트하여 wordMap에 저장
  for (const char of s) {
    wordMap.set(char, (wordMap.get(char) || 0) + 1);
  }

  // t의 각 문자에 대해 카운트를 감소
  for (const char of t) {
    // word 맵에 현재의 문자가 없으면 바로 false 반환
    if (!wordMap.has(char)) {
      return false;
    }

    const count = wordMap.get(char) - 1;

    // 현재의 문자의 남은 개수가 0보다 작아지면 false 반환
    if (count < 0) {
      return false;
    }

    // 정상적인 경우 카운트를 감소
    wordMap.set(char, count);
  }

  return true;
};
