/**
 * [풀이 1] split, map, reduce 사용
 * [과정]
 * 1. s를 문자열로 바꿔 모두 split함
 * 2. 동시에 map을 돌아 Number 타입으로 변환
 * 3. 그 배열을 reduce로 돌며 합을 구함
 * [회고]
 * - 첨에 Number(s).split('')을 했는데, split을 사용할 수 없다고 에러가 뜸.
 * - 생각해보니까 문자열 내장 메서드여서 숫자형은 사용할 수 없었던 걸 간과했음.
 * - 다음엔 어떤 타입에 내장된 메서드인지 인지하면서 사용하도록 하자.(무지성으로 쪼개야하니까 split! 이런 식의 사용은 지양하도록..)
 */
function solution(n) {
  const array = String(n)
    .split('')
    .map((i) => Number(i));

  return array.reduce((acc, cur) => acc + cur, 0);
}

/**
 * [풀이 2] split, reduce 사용
 * [과정]
 * - 위와 동일하기 때문에 설명 생략.
 * [회고]
 * - 풀이 1를 풀고나니 reduce에서 바로 숫자형으로 형변환하면서 누적해도 되겠다는 생각이 들어 재풀이!
 */
function solution(n) {
  return (array = String(n)
    .split('')
    .reduce((acc, cur) => acc + Number(cur), 0));
}

/**
 * [풀이 3] 템플릿 리터럴, 전개 연산자, map, reduce 사용
 * [과정]
 * 1. 템플릿 리터럴로 문자열로 변환
 * 2. 그와 동시에 전개 연산자(...)로 배열에 쪼개줌(= split과 동일)
 * 3. .map(Number)를 쓰면 바로 숫자형으로 모든 요소를 변환해줌
 * 4. reduce 돌면서 합 구하기
 * [회고]
 * - 오늘 알게 된 것 중 새로웠던 점은 [...문자열]을 하게 되면 그 문자열을 split('')한 것과 동일하게 해준다는 것!
 * - 정말 다양한 방식으로 풀 수 있겠구나 싶음.
 * - 관건은 이 모든 활용법들을 기억해두고 다른 문제에서도 적용할 수 있어야 함.
 */
function solution(n) {
  return [...`${n}`].map(Number).reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(123), '정답: 6');
console.log(solution(987), '정답: 24');
