function solution(s) {
  const array = s.split('');

  return array.reduce(
    (total, cur) => (isUppercase(cur) ? (total += 1) : total),
    0,
  );
}

function isUppercase(s) {
  // return s.charCodeAt() >= 65 && s.charCodeAt() <= 90;

  return s === s.toUpperCase();
}

console.log(solution('KoreaTimeGood'), '정답: 3');
