import solution from './solution';

test('이상한 문자 만들기', () => {
  expect(solution('try hello world')).toBe('TrY HeLlO WoRlD');
});
