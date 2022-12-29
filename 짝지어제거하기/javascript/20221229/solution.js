function solution(s) {
  const stack = [];

  s.split("").forEach(word => {
    if (stack.length === 0) {
      stack.push(word);
      return;
    }

    if (stack[stack.length - 1] === word) {
      stack.pop();
      return;
    }

    stack.push(word);
  });

  return stack.length === 0 ? 1 : 0;
}
