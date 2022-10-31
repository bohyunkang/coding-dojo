import solution, { convertToStringNumber } from './solution';

test('문자열 숫자를 아라비아 숫자로 대체하자', () => {
  expect(convertToStringNumber('one4seveneight')).toBe('1478');
  expect(convertToStringNumber('onetwo39')).toBe('1239');
  expect(convertToStringNumber('onetwoone323')).toBe('121323');
});

test('최종 테스트', () => {
  expect(solution('one4seveneight')).toBe(1478);
  expect(solution('onetwo39')).toBe(1239);
});
