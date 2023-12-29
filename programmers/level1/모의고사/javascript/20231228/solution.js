// 풀이 과정(line by line으로 주석 작성)
function solution(answers) {
  const students = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  // 1. answers의 Length보다 student의 length가 부족하면 해당 배열을 그만큼 늘려준다.
  // 1-2. 만약 오히려 더 길다면, answers의 길이만큼 자른다.
  const iteratedAnswers = students.map((student) =>
    student.length > answers.length
      ? student.slice(0, answers.length)
      : iterate(student, answers.length),
  );

  // 2. 배열을 늘려서 길이를 맞췄다면 각 배열들을 돌며 answers와 값이 같은 경우만을 filter한다.
  // 2-2. filter한 값의 length가 긴 순으로 반환한다.
  const scores = iteratedAnswers.map(
    (student) => student.filter((item, i) => item === answers[i]).length,
  );

  // 3. 최고점을 구한다.
  const firstPrize = Math.max(...scores);

  // 4. 최고점을 받은 학생이 2명 이상인지 확인한다.
  const student1 = scores.indexOf(firstPrize) + 1;
  const student2 = scores.lastIndexOf(firstPrize) + 1;

  // 5. 한명이라면 한명만 배열에 담아서 반환한다.
  if (student1 === student2) {
    return [student1];
  }

  // 6. 두 명인 경우에는 순회하면서 최고점을 받은 학생 번호를 배열에 담아서 반환한다.
  return scores.reduce((acc, score, i) => {
    if (score === firstPrize) {
      return [...acc, i + 1];
    }

    return [...acc];
  }, []);
}

function iterate(array, length) {
  let count = 0;
  const array = [];

  for (let i = 0; i < length; i += 1) {
    if (count >= array.length) {
      count = 0;
    }

    array.push(array[count]);

    count += 1;
  }

  return array;
}

console.log(solution([1, 2, 3, 4, 5]), '정답: [1]');
console.log(solution([1, 3, 2, 4, 2]), '정답: [1, 2, 3]');
