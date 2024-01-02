// 풀이 과정
// 1. 해당 char를 아스키코드로 변환 후 target 변수에 저장.
// 2. index만큼 반복하며, target 코드를 더한다.
// 2-1. 이때 target이 122를 넘어가게 되면 97로 되돌려준다.
// 3. skip에 target이 존재한다면 target을 +1해준다.
// 3-1. 이때도 마찬가지로 target이 122를 넘어가게 되면 97로 되돌려준다.
// 4. answer에 복호화한 단어를 누적한다.
// 5. 반복문 종료 후에 복호화한 단어를 반환한다.
function solution(s, skip, index) {
  let answer = '';
  let splitS = [...s];

  splitS.map((char) => {
    let target = char.charCodeAt();

    for (let i = 0; i < index; i += 1) {
      target += 1;

      if (target > 122) {
        target = 97;
      }

      while (skip.includes(String.fromCharCode(target))) {
        target += 1;

        if (target > 122) {
          target = 97;
        }
      }
    }

    answer += String.fromCodePoint(target);
  });

  return answer;
}

// 다른 풀이
// 1. filter 함수를 사용하여 skip문자를 제거 배열을 반환 받는다.
// 2. map 함수를 사용하여 (현재 알파벳) + index에 위치한 값을 반환한다.
function solution(s, skip, index) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
    'u', 'v', 'w', 'x', 'y', 'z'].filter(c => !skip.includes(c));

  return [...s]
    .map((target) => alphabet[(alphabet.indexOf(target) + index) % alphabet.length])
    .join('');
}

console.log(solution('aukks', 'wbqd', 5), '정답: happy');
