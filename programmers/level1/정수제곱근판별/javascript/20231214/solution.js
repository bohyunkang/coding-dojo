/**
 * [풀이 1] pow, sqrt 사용
 * [과정]
 * 1. sqrt 메서드로 제곱근을 구함.
 * 2. 구해진 제곱근이 정수라면 + 1한 값을 거듭제곱한 값을 반환
 * 3. 만약 소수라면, -1 반환
 * [회고]
 * - Number.isInteger() 메서드 처음 사용해봄. 정수 여부를 참/거짓으로 판단할 수 있으니 기억해두자.
 */
function solution(n) {
  const sqrt = Math.sqrt(n);

  if (Number.isInteger(sqrt)) {
    return Math.pow(sqrt + 1, 2);
  }

  return -1;
}

/**
 * [풀이 2] **(거듭제곱) 연산자 사용
 * [과정] 풀이 1와 동일
 * [회고]
 * - ** 거듭제곱 연산자를 처음 알게 됨.
 *   - 왼쪽 피연산자를 밑, 오른쪽 피연산자를 지수로 한 값을 구함.
 *   - BigInt도 피연산자로 받을 수 있다는 점을 제외하면 Math.pow()와 같다고 함.
 * - **= 거듭제곱 할당 연산자도 알아두기!
 */
function solution(n) {
  const sqrt = Math.sqrt(n);

  if (Number.isInteger(sqrt)) {
    return (sqrt + 1) ** 2;
  }

  return -1;
}

console.log(solution(121), '정답: 144');
console.log(solution(3), '정답: -1');
