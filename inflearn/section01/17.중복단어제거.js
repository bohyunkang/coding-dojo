function solution(s) {
  const answer = [];

  s.map((string) => (!answer.includes(string) ? answer.push(string) : null));

  return answer;
}

console.log(
  solution(['good', 'time', 'good', 'time', 'student']),
  '정답: good, time, student',
);

// 풀이 2: reduce, includes 활용
function solution2(s) {
  return s.reduce(
    (acc, current) => (acc.includes(current) ? acc : [...acc, current]),
    [],
  );
}

console.log(
  solution2(['good', 'time', 'good', 'time', 'student']),
  '정답: good, time, student',
);

// 풀이 3: filter, indexOf
function solution3(s) {
  return s.filter((string, i) => s.indexOf(string) === i);
}

console.log(
  solution3(['good', 'time', 'good', 'time', 'student']),
  '정답: good, time, student',
);
