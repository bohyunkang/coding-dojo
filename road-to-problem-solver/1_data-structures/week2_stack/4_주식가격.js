// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42584

/**
 * 풀이 1: 접근 방식
 * 1. 정답을 담을 배열 result를 준비한다.
 * 2. for 문을 처음 돌면서:
 *    a. 가격이 떨어지지 않는 기간(duration)을 담는 변수를 0으로 초기화한다.
 *    b. for 문을 두번째 돌면서:
 *       1) 현재 요소와 그 다음 요소를 비교하며 현재 요소가 큰 경우(= 가격이 떨어지지 않은 경우) 두번째 for 문 탈출한다.
 *       2) 가격이 떨어진 경우, result에 duration을 추가한다.
 * 3. 그렇게 주식의 등락 결과가 담긴 배열 result를 반환한다.
 */
function solution(prices) {
  const result = [];

  for (let i = 0; i < prices.length; i += 1) {
    let duration = 0;

    for (let j = i + 1; j < prices.length; j += 1) {
      duration += 1;

      if (prices[i] > prices[j]) {
        break;
      }
    }

    result.push(duration);
  }

  return result;
}
