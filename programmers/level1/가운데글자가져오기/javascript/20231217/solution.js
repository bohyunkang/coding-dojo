function solution(s) {
  const midIndex = Math.floor(s.length / 2);

  if (s.length % 2 === 0) {
    return s.substr(midIndex - 1, 2);
  }

  return s.substr(midIndex, 1);
}

console.log(solution('abcde'), '정답: c');
console.log(solution('qwer'), '정답: we');
