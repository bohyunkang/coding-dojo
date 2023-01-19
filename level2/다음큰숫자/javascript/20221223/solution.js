function countOfOne(number) {
  const binary = number.toString(2);

  return binary.split('').filter((i) => i === '1').length;
}

function isEqualCountOfOne(number, target) {
  return countOfOne(number) === countOfOne(target);
}

function solution(n) {
  let answer = n + 1;

  while (!isEqualCountOfOne(n, answer)) {
    answer += 1;
  }

  return answer;
}
