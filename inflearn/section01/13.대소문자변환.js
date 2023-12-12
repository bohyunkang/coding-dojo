function solution(s) {
  const answer = s
    .split('')
    .map((string) => {
      if (isUppercase(string)) {
        return string.toLowerCase();
      }

      if (!isUppercase(string)) {
        return string.toUpperCase();
      }
    })
    .join('');

  return answer;
}

function isUppercase(string) {
  return string === string.toUpperCase();
}

console.log(solution('StuDY'), '정답: sTUdy');
console.log(solution('sTUdy'), '정답: StuDY');
