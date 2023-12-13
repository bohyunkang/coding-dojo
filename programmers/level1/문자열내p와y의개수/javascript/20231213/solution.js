/**
 * [풀이 1] split과 filter 사용
 * [과정]
 * 1. 문자열을 split하여 대문자로 변환
 * 2. P와 Y가 있는지 filter한 후
 * 3. 추출된 각 배열의 length 비교
 * [회고]
 * - 가장 먼저 떠올랐던 풀이! 정답도 다들 이렇게 많이들 풀었더라.
 */
function solution(s) {
  const string = s.split('').map((item) => item.toUpperCase());

  const numberOfP = getNumberOfChar(string, 'P');
  const numberOfY = getNumberOfChar(string, 'Y');

  return numberOfP === numberOfY;
}

function getNumberOfChar(array, char) {
  return array.filter((item) => item === char).length;
}

/**
 * [풀이 2] reduce 사용
 * [과정]
 * 1. 문자열을 split하여 대문자로 변환(풀이 1과 동일)
 * 2. P와 Y가 있는지 reduce로 순회하며 확인
 * 3. P가 있다면 acc + 1 / Y가 있다면 acc - 1
 * 3. acc가 0이라면 p와 y의 개수가 같다는 것이니 true / 0이 아니라면 false 반환
 * [회고]
 * - reduce를 사용할 방법이 없나 고민하던 도중, 좋은 풀이 발견해서 한번 풀어봄.
 * - 처음에는 acc를 배열 형태로 [{p: p의 갯수}, {y: y의 갯수}] 이런 식으로 누적하려 하였으나 점점 복잡해지는 느낌이 들었음.
 * - 그래서 다른 사람 풀이를 찾아 보니 p와 y의 갯수를 대칭적으로 +/- 시키는 식으로 풀었길래 훨씬 간단해져서 이렇게 풀어봄.
 * - 앞으로 이렇게 두가지를 비교할 때는 갯수를 증감시키는 방법으로 확인할 수 있겠다는 좋은 팁을 얻음!
 */
function solution(s) {
  const string = s.split('').map((item) => item.toUpperCase());

  const numberOfPAndY = string.reduce((acc, cur) => {
    if (cur === 'P') return (acc += 1);
    if (cur === 'Y') return (acc -= 1);
    return acc;
  }, 0);

  return numberOfPAndY === 0 ? true : false;
}

/**
 * [풀이 3] 정규표현식 사용
 * [과정]
 * 1. match를 사용해서 문자열 속 p와 y의 갯수를 찾는다
 *    -> 이때 여러 개를 찾아야 하기 때문에 g, 대소문자 구분 없이 찾아야 하기 때문에 i 플래그 사용
 *    -> p와 y가 없는 경우도 존재하기 때문에 오류가 발생하지 않게 옵셔널 체이닝(?.)
 * 3. 모두 하나도 없는 경우는 항상 true를 리턴한다 하니 둘 다 undefined인 경우 true 얼리 리턴
 * 3. 마지막으로 p와 y 개수 비교하여 true/false 리턴.
 * [회고]
 * - 정규표현식도 자주 사용하면 좋겠다 싶어서 문자열 문제는 정규표현식으로도 풀어보려고 노력해봄.
 * - 처음에 작성한 코드는 '코드 실행'할 때의 테스트 케이스는 통과하지만, 최종 결과를 제출하면 계속 런타임 에러가 뜸!
 * - 찾아보니 p와 y가 아예 없는 문자열의 경우 에러가 나는 것을 파악함.
 * - 에러바운더리 처리까지 해주니 모든 케이스 다 통과하고 정답 처리 되었음.
 * - 하지만 시간이 0.07ms~0.09ms 정도인 풀이 1과 달리 풀이 2,3은 0.14ms 정도가 걸리는 경우도 있어서 최악의 경우도 생각해보도록 하자.
 * - 간단할 땐 걍 풀이 1가 제일 베스트인듯!
 */
function solution(s) {
  const numberOfP = s.match(/p/gi)?.length;
  const numberOfY = s.match(/y/gi)?.length;

  if (numberOfP === undefined && numberOfY === undefined) {
    return true;
  }

  return numberOfP === numberOfY;
}
