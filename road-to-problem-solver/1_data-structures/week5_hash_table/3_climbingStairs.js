// 문제 링크: https://leetcode.com/problems/climbing-stairs
/**
 * @param {number} n
 * @return {number}
 */

// ‼️ 중요 공식: 피보나치 수열
//  => n번째 계단에 도달하는 방법의 수 = f(n) = f(n - 1) + f(n - 2)

/**
 * 풀이 1: 해시테이블 메모이제이션 활용
 */
var climbStairs = function (n) {
  // 저장을 위한 위한 해시테이블
  const memo = {};

  function climb(n) {
    // 이미 계산된 값이 있으면 반환
    if (n in memo) {
      return memo[n];
    }

    // n이 2보다 작거나 같은 경우 바로 n 반환
    if (n <= 2) {
      return n;
    }

    // 결과 저장 후 반환
    memo[n] = climb(n - 1) + climb(n - 2);
    return memo[n];
  }

  return climb(n);
};

/**
 * 풀이 2: 재귀 함수 활용 => 🚨 시간 초과;;
 */
var climbStairs = function (n) {
  if (n <= 2) {
    return n;
  }

  // 재귀 호출
  return climbStairs(n - 1) + climbStairs(n - 2);
};
