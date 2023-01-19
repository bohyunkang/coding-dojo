function solution(s) {
  const words = s.split("");
  const stack = [];

  for (const word of words) {
    if (stack.length === 0) {
      stack.push(word);
      continue;
    }

    if (stack[stack.length - 1] === word) {
      stack.pop();
      continue;
    }

    stack.push(word);
  }

  if (stack.length === 0) {
    return 1;
  }

  return 0;
}
