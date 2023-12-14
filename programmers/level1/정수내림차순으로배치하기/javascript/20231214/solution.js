/**
 * [풀이 1] sort, reverse 사용
 * [과정]
 * 1. 문자열로 변환 뒤 쪼개서 배열로 저장
 * 2. sort로 오름차순 정렬
 * 3. reverse로 배열 역순으로 배치
 * 4. join해서 한 단어로 만든 뒤 Number형으로 변환하여 반환
 * [회고]
 * - 어제부터 계속 비슷한 문제들을 풀고 있기 때문에 생각보다 그리 어렵지 않게 푸는 중.
 */
function solution(n) {
  const answer = [...`${n}`].sort().reverse().join('');

  return Number(answer);
}

/**
 * [풀이 2] sort 기능 활용
 * [과정]
 * 1. 문자열로 변환 뒤 쪼개서 배열로 저장
 * 2. sort로 내림차순 정렬
 * 4. join해서 한 단어로 만든 뒤 Number형으로 변환하여 반환
 * [회고]
 * - 풀이 1을 풀고 생각해보니, sort 인자값으로 내림차순 정렬할 수 있는 게 문득 떠오름..(바본가?)
 * - 바로 reverse 없애고 sort로만 문제 풀이 완!
 */
function solution(n) {
  const answer = [...`${n}`].sort((a, b) => b - a).join('');

  return Number(answer);
}

console.log(solution(118372), '정답: 873211');
