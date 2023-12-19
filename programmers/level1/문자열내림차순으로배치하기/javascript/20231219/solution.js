// 풀이 1: for, charCodeAt, sort, fromCharCode
// 1. for문을 돌면서 array에 해당 문자의 아스키코드값을 담는다.
// 2. 그 배열을 내림차순으로 정렬한다.
// 3. fromCharCode 메서드로 아스키코드를 문자열로 전환하여 반환한다.
function solution(s) {
  const array = [];

  for (let i = 0; i < s.length; i += 1) {
    array.push(s.charCodeAt(i));
  }

  const sortedArray = array.sort((a, b) => b - a);

  return String.fromCharCode(...sortedArray);
}

// 풀이 2: map, charCodeAt, sort, fromCharCode
// 풀이 1과 과정 동일.
function solution(s) {
  const sortedString = [...`${s}`]
    .map((_, i) => s.charCodeAt(i))
    .sort((a, b) => b - a);

  return String.fromCharCode(...sortedString);
}

// 풀이 3: split, sort, reverse, join
// 1. 문자열을 하나씩 쪼개고(split), 정렬한다(sort).
// 1-1. sort에 인자값을 넘기지 않으면 기본으로 오름차순 정렬한다.
// 2. 정렬된 배열을 내림차순 정렬(reverse)하고, 한 문자열로 만들어(join) 반환한다.
function solution(s) {
  return s.split('').sort().reverse().join('');
}

// 풀이 4: split, sort, join
// 과정은 풀이 3과 동일하나 reverse를 사용하지 않고, sort에 내림차순 옵션을 지정해준다.
function solution(s) {
  return s
    .split('')
    .sort((a, b) => (a > b ? -1 : 1))
    .join('');
}

console.log(solution('Zbcdefg'), '정답: gfedcbZ');
