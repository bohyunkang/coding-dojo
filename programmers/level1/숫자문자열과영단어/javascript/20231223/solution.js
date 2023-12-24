function solution(s) {
  const NUMBERS = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  for (let i = 0; i < NUMBERS.length; i += 1) {
    if (s.includes(NUMBERS[i])) {
      s = s.replaceAll(NUMBERS[i], i);
    }
  }

  return Number(s);
}

console.log(solution('one4seveneight'), '정답: 1478');
console.log(solution('23four5six7'), '정답: 234567');
console.log(solution('2three45sixseven'), '정답: 234567');
console.log(solution('123'), '정답: 123');
