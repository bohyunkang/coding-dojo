// 효율성 테케 1을 통과 못 함.
function solution(s) {
  const stack = [];

  for (const char of s) {
    if (stack.length === 0) {
      stack.push(char);
      continue;
    }

    if (stack[stack.length - 1] === '(') {
      if (char === ')') {
        stack.pop();
        continue;
      }

      if (char === '(') {
        stack.push(char);
      }
    }
  }

  return stack.length === 0;
}

// 정답
function solution(s) {
  const stack = [];

  for (const char of s) {
    if (char === ')' && stack[stack.length - 1] === '(') {
      stack.pop();
      continue;
    }

    stack.push(char);
  }

  return stack.length === 0;
}

console.log(solution('()()'), '정답: true');
console.log(solution('(())()'), '정답: true');
console.log(solution(')()('), '정답: false');
console.log(solution('(()('), '정답: false');
console.log(solution('()()()((())()()()()()'), '정답: false');
console.log(solution('())((()))(()'), '정답: false');
