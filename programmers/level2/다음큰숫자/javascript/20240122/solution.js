function solution(n) {
  let target = n + 1;
  let countOfN = howManyOne(n);

  while (countOfN !== howManyOne(target)) {
    target += 1;
  }

  return target;
}

function howManyOne(target) {
  return target
    .toString(2)
    .split('')
    .filter((item) => item === '1').length;
}

console.log(solution(78), '정답: 83');
console.log(solution(15), '정답: 23');
