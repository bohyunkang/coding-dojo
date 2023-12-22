function solution(s) {
  return s
    .split(' ')
    .map((word) => {
      return [...word].reduce(
        (acc, cur, i) =>
          i % 2 === 0 ? (acc += cur.toUpperCase()) : (acc += cur.toLowerCase()),
        '',
      );
    })
    .join(' ');
}

console.log(solution('try hello world'), '정답: TrY HeLlO WoRlD');
