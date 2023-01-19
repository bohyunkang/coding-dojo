import solution, { getSupojaAnswers } from './solution';

const correctAnswers = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

test('수포자 1, 2, 3의 패턴을 정답 길이에 맞게 반복하는 함수를 만든다.', () => {
  expect(getSupojaAnswers(correctAnswers)).toStrictEqual([
    [1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5, 2, 1],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ]);
});

test('수포자들의 답변과 정답을 비교해서 가장 많은 문제를 맞힌 사람을 찾는다.', () => {
  expect(solution(correctAnswers)).toStrictEqual([1]);
});
