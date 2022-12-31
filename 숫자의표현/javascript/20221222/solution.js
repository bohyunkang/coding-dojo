function expression(currentNumber, target) {
  let sum = 0;

  for (let i = currentNumber; i < target; i += 1) {
    sum += i;

    if (sum > target) {
      return false;
    }

    if (sum === target) {
      return true;
    }
  }

  return false;
}

function solution(n) {
  let answer = 1;

  for (let i = 1; i < n; i += 1) {
    if (expression(i, n)) {
      answer += 1;
    }
  }

  return answer;
}
