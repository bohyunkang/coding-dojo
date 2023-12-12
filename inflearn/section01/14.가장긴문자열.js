function solution(s) {
  let answer = '';

  s.map((string) => {
    if (string.length > answer.length) {
      answer = string;
    }
  });

  return answer;
}

console.log(
  solution(['teacher', 'time', 'student', 'beautiful', 'good']),
  '정답: beautiful',
);
