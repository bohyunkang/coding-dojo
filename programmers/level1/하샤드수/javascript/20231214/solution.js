/**
 * [풀이 1]
 * [과정]
 * 1. x를 쪼개 자릿수를 다 더하고 그 값을 addX라는 변수에 저장한다.
 * 2. x를 addX로 나눴을 때 딱 떨어지면(=나머지가 0일 때) 그 수가 하샤드 수.
 * [회고]
 * - 하샤드수의 조건: 어떤 수에 그 수의 자릿수를 다 더한 값이 나누어떨어지면 된다.
 * - 1년 전 자바로 풀었던 코드를 보면 확실히 자바로 짠 코드가 복잡한 거 같기도..? 풀이과정은 똑같군!
 */
function solution(x) {
  const addX = [...`${x}`].reduce((acc, cur) => acc + Number(cur), 0);

  return x % addX === 0;
}

console.log(solution(18), '정답: true');
console.log(solution(10), '정답: true');
console.log(solution(12), '정답: true');
console.log(solution(11), '정답: false');
console.log(solution(13), '정답: false');
