import { split, sort, join } from './solution';

test('쪼개기', () => {
  expect(split(118372)).toStrictEqual(['1', '1', '8', '3', '7', '2']);
});

test('내림차순으로 정렬하기', () => {
  const array = ['1', '1', '8', '3', '7', '2'];
  expect(sort(array)).toStrictEqual([8, 7, 3, 2, 1, 1]);
});

test('하나의 정수로 합치기', () => {
  const array = [8, 7, 3, 2, 1, 1];
  expect(join(array)).toBe(873211);
});
