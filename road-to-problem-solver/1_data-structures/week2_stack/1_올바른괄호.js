// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12909

/**
 * 접근 방법
 *
 * 1. 처음 시작이 ) 인 경우 바로 false 얼리 리턴
 * 2. 반복문을 순회하며:
 *   a. ( 인 경우, brackets.push
 *   b. ) 인 경우, brackets.length > 0인 경우 brackets.pop
 * 3. 반복문이 종료된 후, brackets.length가 0이면 true / 1 이상이면 false
 */

function solution(s) {
  if (s.startsWith(')')) {
    return false;
  }

  const brackets = [];

  for (const item of s) {
    if (item === '(') {
      brackets.push(item);
      continue;
    }

    if (item === ')') {
      if (brackets.length > 0) {
        brackets.pop();
        continue;
      }
    }
  }

  return brackets.length === 0 ? true : false;
}

/**
 * 리뷰 반영
 * - 마지막 continue 제거
 * - return문 축약
 * - brackets 요소 Boolean형으로 추가
 */

function solution(s) {
  if (s.startsWith(')')) {
    return false;
  }

  const brackets = [];

  for (const item of s) {
    if (item === '(') {
      brackets.push(true);
      continue;
    }

    if (item === ')') {
      if (brackets.length > 0) {
        brackets.pop();
      }
    }
  }

  return brackets.length === 0;
}
