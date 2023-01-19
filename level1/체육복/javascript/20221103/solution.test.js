import solution from './solution';

test('체육 수업을 들을 수 있는 최종 인원을 구해라.', () => {
  expect(solution(5, [2, 4], [1, 3, 5])).toBe(5);
  expect(solution(5, [2, 4], [3])).toBe(4);
  expect(solution(3, [3], [1])).toBe(2);
});
