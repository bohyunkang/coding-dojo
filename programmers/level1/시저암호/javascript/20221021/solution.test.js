import solution from './solution';

test('시저 암호를 구해보자', () => {
  expect(solution('AB', 1)).toBe('BC');
  expect(solution('z', 1)).toBe('a');
  expect(solution('a B z', 4)).toBe('e F d');
});
