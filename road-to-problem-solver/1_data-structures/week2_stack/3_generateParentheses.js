// 문제 링크: https://leetcode.com/problems/generate-parentheses/

/**
 * 재귀 함수 활용
 * - backtrack(현재 문자열, 열린 괄호수, 닫힌 괄호수)
 *  - ( 추가 => 아직 사용하지 않은 괄호수가 있을 때
 *  - ) 추가 => 닫힘이 열림보다 적을 때
 * - 열린, 닫힌 괄호수가 같아졌을 때 종료
 * - 결과 저장 => 유효한 괄호조합인 경우 결과리스트에 추가
 * - 초기: backtrack(빈 문자열, 0, 0)
 *
 * 1. 함수는 항상 가능한 한 많은 '('를 먼저 추가.
 * 2. ')'는 열린 괄호의 수가 닫힌 괄호보다 많을 때만 추가.
 * 3. 유효한 조합이 완성되면 (길이가 2n일 때) 결과에 추가되고, 함수는 이전 단계로 복귀.
 * 4. 백트래킹을 통해 모든 가능한 조합을 탐색.
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];

  function backtrack(currentString, openCount, closeCount) {
    if (openCount === n && closeCount === n) {
      result.push(currentString);

      console.log('result = ', result);

      return currentString;
    }

    if (openCount < n) {
      backtrack(currentString + '(', openCount + 1, closeCount);
    }

    if (closeCount < openCount) {
      backtrack(currentString + ')', openCount, closeCount + 1);
    }
  }

  backtrack('', 0, 0);

  return result;
};
