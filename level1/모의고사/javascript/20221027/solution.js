function iteratePatterns(pattern, correctAnswers) {
  return [...correctAnswers.keys()].map((i) => pattern[i % pattern.length]);
}

export function getSupojaAnswers(correctAnswers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  return patterns.map((pattern) => iteratePatterns(pattern, correctAnswers));
}

function grade(answer, correctAnswers) {
  return answer.map((a, i) => (a === correctAnswers[i] ? 1 : 0));
}

export default function solution(correctAnswers) {
  const answers = getSupojaAnswers(correctAnswers);
  const results = answers.map((answer) => grade(answer, correctAnswers));
  const scores = [...results.map((result) => result.reduce((acc, curr) => acc + curr))];
  const bestScore = Math.max(...scores);

  return [...scores.keys()].filter((i) => scores[i] === bestScore).map((i) => i + 1);
}
