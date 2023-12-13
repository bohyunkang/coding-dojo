/**
 * [풀이 1] 템플릿 리터럴, 전개 연산자, map, reverse 사용
 * [과정]
 * 1. 템플릿 리터럴로 문자열로 변환
 * 2. 그와 동시에 전개 연산자(...)로 배열에 쪼개줌(= split과 동일)
 * 3. .map(Number)를 쓰면 바로 숫자형으로 모든 요소를 변환해줌
 * 4. reverse 메서드로 뒤집어 반환
 * [회고]
 * - 두번째로 푼 문제 '자릿수 더하기'의 풀이 3에서 착안하여 풀어봄.
 * - 지속적이고 의식적인 활용만이 장기기억으로 가는 지름길!
 */

function solution(n) {
  return [...`${n}`].map(Number).reverse();
}

/**
 * [풀이 2] 템플릿 리터럴, 전개 연산자, for문 사용
 * [과정]
 * 1. answer가 될 빈 배열을 만든다.
 * 2. 숫자를 쪼개 numbers 배열로 만든다.
 * 3. for문의 index를 거꾸로 돌려 answer에 넣어준다.
 * [회고]
 * - 만약 reverse를 사용하지 말라고 하는 제약이 있다면 어떻게 풀어야 할까 추가 고민해봤음
 * - 항상 for (let i = 0; i < arr.length; i += 1)의 조건으로만 만들었어서 첨에 조건을 다시 설정하는데 머리가 복잡했음.
 * - 그리하여 다시 찾아본 for 문 정의:
 *    - for ([initialization]; [condition]; [final-expression])
 *    - [initialization]: 카운터 변수 초기화
 *    - [condition]: 평가 결과가 참이라면 실행, 거짓이라면 건너뜀
 *    - [final-expression]: 카운터 변수 증감
 */

function solution(n) {
  const answer = [];
  const numbers = [...`${n}`].map(Number);

  for (let i = numbers.length - 1; i >= 0; i -= 1) {
    answer.push(numbers[i]);
  }

  return answer;
}

/**
 * [풀이 3] 일의 자리 구하는 방법 활용.
 * [과정]
 * 1. answer가 될 빈 배열을 만든다.
 * 2. while 반복문을 돌린다.
 *    - 조건: n이 0보다 클 때까지 반복한다.
 *    - 일의 자리 구하는 법: n % 10
 *    - 그 다음 일의자리 만들기: Math.floor(n / 10)
 * 3. 구해진 answer를 리턴한다.
 * [회고]
 * - 일의 자리 구하는 과정 풀이
 *   1) 만약 123이라는 숫자 n이 있다고 가정하고 반복문을 돌린다.
 *   - 첫번째 턴
 *    1) 123 % 10 = 3
 *    2) Math.floor(123 / 10) = 12
 *    3) answer에 3이 넣어지고 n은 123에서 12로 재할당
 *   - 두번째 턴
 *    1) 12 % 10 = 2
 *    2) Math.floor(12 / 10) = 1
 *    3) answer에 2가 넣어지고 n은 12에서 1로 재할당
 *   - 세번째 턴
 *    1) 1 % 10 = 1
 *    2) Math.floor(1 / 10) = 0
 *    3) answer에 1이 넣어지고 n은 1에서 0으로 재할당
 *   - 마지막 턴
 *    1) n이 0이므로 반복문 종료
 * - 참고 블로그: https://medium.com/jongah-tech-blog/splice-slice-split-94816d793f96
 */
function solution(n) {
  const answer = [];

  while (n > 0) {
    answer.push(n % 10);
    n = Math.floor(n / 10);
  }

  return answer;
}

console.log(solution(12345), '정답: [5, 4, 3, 2, 1]');
