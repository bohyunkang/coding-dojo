// 풀이 1(풀이 실패)
// 1. 문자 s를 각 알파벳으로 쪼갠다.(공백도 같이 쪼개야 함 => 나중에 join할 때도 그대로여야 함)
// 2. 해당 알파벳이 대문자인지 소문자인지 판별한다.
// 3. 해당 알파벳에 n만큼의 수를 더한 알파벳을 반환한다.
function solution(s, n) {
  const encodedString = s.split('').map((item) => {
    if (item === ' ') {
      return ' ';
    }

    if (item.charCodeAt() === 90) {
      return String.fromCharCode(64 + n);
    }

    if (item.charCodeAt() === 122) {
      return String.fromCharCode(96 + n);
    }

    return String.fromCharCode(item.charCodeAt() + n);
  });

  return encodedString.join('');
}

// 풀이 2
function solution(s, n) {
  return s
    .split('')
    .map((char) => String.fromCharCode(encode(char.charCodeAt(), n)))
    .join('');
}

function encode(char, n) {
  if (char < 65) {
    return char;
  }
  if (char < 97) {
    return 65 + ((char - 65 + n) % 26);
  }
  return 97 + ((char - 97 + n) % 26);
}

console.log(solution('AB', 1), '정답: BC');
console.log(solution('z', 1), '정답: a');
console.log(solution('a B z', 4), '정답: e F d');
