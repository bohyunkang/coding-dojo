// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12906

/**
 * 풀이 1: for 사용
 *
 * 1. 중복 숫자를 제거할 배열 array 선언한다.
 * 2. for문으로 arr을 순회하며 array에 현재 요소가 이미 존재하면 return
 * 3. 존재하지 않다면 array에 추가(push)
 */
function solution(arr) {
  const array = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (array.includes(arr[i])) return;
    array.push(arr[i]);
  }

  return array;
}

/**
 * 풀이 2: filter 사용
 *
 * 참고) filter 함수: 참인 경우, 요소 유지 / 거짓인 경우 요소 제거
 *
 * 1. filter로 arr을 순회하며 현재 요소가 바로 이전 요소와 다른지를 비교함
 * 2. 다른 경우 요소 유지 / 같은 경우 요소 제거
 * 3. 첫번째 요소의 경우, i - 1은 -1이고, arr[-1]은 undefined이므로 첫번째 요소는 항상 포함됨
 */
function solution(arr) {
  return arr.filter((num, i) => num !== arr[i - 1]);
}

/**
 * 풀이 3: reduce 사용
 *
 * 참고) reduce 함수: 각 요소에 대해 주어진 reducer 함수를 실행해 하나의 결과값을 반환함.
 * - reduce의 두번째 인자는 초기 누적값(accumulator)으로, [] 빈배열을 사용하였음.
 *
 * 1. reduce로 arr을 순회하며, 배열 형태의 acc에 현재 요소가 바로 이전 요소와 다른지를 비교함
 * 2. 다른 경우 acc에 해당 요소를 추가 / 같은 경우 스킵
 * 3. 중복되지 않는 숫자만 담긴 acc 배열을 return함
 */
function solution(arr) {
  return arr.reduce((acc, num, i) => {
    if (num !== arr[i - 1]) {
      acc.push(num);
    }

    return acc;
  }, []);
}
