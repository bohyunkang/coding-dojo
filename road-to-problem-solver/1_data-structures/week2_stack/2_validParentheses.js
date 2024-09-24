// 문제 링크: https://leetcode.com/problems/valid-parentheses/

/**
 * 🚨 풀이 실패!!! 문제를 잘 읽자!!!
 * -> 실패 원인: 짝이 맞기만 해도 되는 줄 알았는데, "([)]" 이 경우에는 테스트를 통과하지 못함!!
 * -> 조건 중 'Open brackets must be closed in the correct order.(열린 괄호는 올바른 순서로 닫혀야 합니다)' 를 안 읽음;;ㅠ
 *
 * 풀이 1 접근 방법
 *
 * 1. 여는 괄호/닫는 괄호가 담긴 배열과 짝을 맞춰볼 빈 배열 brackets를 사전에 준비한다.
 *   a. openBrackets: [ '(', '{', '[' ]
 *   b. closeBrackets: [ ')', '}', ']' ]
 * 2. 시작이 closeBrackets 중 하나라면 바로 false 얼리 리턴
 * 3. 반복문을 순회하며:
 *   a. openBrackets 중 하나라면 brackets.push
 *   b. closeBrackets 중 하나라면 brackets의 해당 괄호의 여는 괄호가 존재하는지를 확인
 *     -> 있다면 answer += 1
 * 4. answer가 주어진 배열 길이의 2로 나눈 값과 동일하면 true / 아니면 false
 *   - 짝이 맞는 경우(=valid)는 주어진 배열의 길이를 2로 나눈 값이 answer 여야 함.
 *     -> 예시로 '()'인 경우, 짝이 맞다면 answer = 1(=총 길이 / 2);
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const openBrackets = ['(', '{', '['];
  const closeBrackets = [')', '}', ']'];
  const brackets = [];

  let answer = 0;

  if (closeBrackets.includes(s.charAt(0))) {
    return false;
  }

  for (const item of s) {
    if (openBrackets.includes(item)) {
      brackets.push(item);
      continue;
    }

    if (closeBrackets.includes(item)) {
      switch (item) {
        case ')':
          if (brackets.includes('(')) {
            answer += 1;
          }
          break;
        case '}':
          if (brackets.includes('{')) {
            answer += 1;
          }
          break;
        case ']':
          if (brackets.includes('[')) {
            answer += 1;
          }
          break;
        default:
          break;
      }
    }
  }

  return answer === s.length / 2 ? true : false;
};

/**
 * 풀이 2 접근 방법 => 이게 속도는 제일 빠름!!
 *
 * 1. 여는 괄호/닫는 괄호가 담긴 배열과 짝을 맞춰볼 빈 배열 brackets를 사전에 준비한다.
 *   a. openBrackets: [ '(', '{', '[' ]
 *   b. closeBrackets: [ ')', '}', ']' ]
 * 2. 시작이 closeBrackets 중 하나라면 바로 false 얼리 리턴
 * 3. 반복문을 순회하며:
 *   a. openBrackets 중 하나라면 brackets.push
 *   b. closeBrackets 중 하나라면 brackets의 해당 괄호의 여는 괄호가 존재하는지를 확인
 *     -> 있다면 brackets.pop
 * 4. brackets의 길이가 0이면 true / 아니면 false
 */
var isValid = function (s) {
  const openBrackets = ['(', '{', '['];
  const closeBrackets = [')', '}', ']'];
  const brackets = [];

  if (closeBrackets.includes(s.charAt(0))) {
    return false;
  }

  for (const item of s) {
    if (openBrackets.includes(item)) {
      brackets.push(item);
      continue;
    }

    if (closeBrackets.includes(item)) {
      const latestBracket = brackets[brackets.length - 1];

      switch (item) {
        case ')':
          if (brackets.length === 0 || latestBracket !== '(') {
            return false;
          }
          brackets.pop();
          break;
        case '}':
          if (brackets.length === 0 || latestBracket !== '{') {
            return false;
          }
          brackets.pop();
          break;
        case ']':
          if (brackets.length === 0 || latestBracket !== '[') {
            return false;
          }
          brackets.pop();
          break;
        default:
          break;
      }
    }
  }

  return brackets.length === 0 ? true : false;
};

// 풀이 3: switch 제거하고 if-else문으로 재작성
var isValid = function (s) {
  const openBrackets = ['(', '{', '['];
  const closeBrackets = [')', '}', ']'];
  const brackets = [];

  if (closeBrackets.includes(s.charAt(0))) {
    return false;
  }

  for (const item of s) {
    if (openBrackets.includes(item)) {
      brackets.push(item);
      continue;
    }

    if (closeBrackets.includes(item)) {
      if (brackets.length === 0) {
        return false;
      }

      const latestBracket = brackets[brackets.length - 1];

      if (
        (item === ')' && latestBracket !== '(') ||
        (item === '}' && latestBracket !== '{') ||
        (item === ']' && latestBracket !== '[')
      ) {
        return false;
      }

      brackets.pop();
    }
  }

  return brackets.length === 0 ? true : false;
};

// TODO: 객체의 key-value를 활용해서도 작성해보기.
