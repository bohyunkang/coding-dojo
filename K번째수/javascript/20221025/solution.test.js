import solution, { sliceAndSort } from './solution';

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

test('배열을 짜르고 정렬하자', () => {
  expect(sliceAndSort(array, commands[0])).toBe(5);
  expect(sliceAndSort(array, commands[1])).toBe(6);
  expect(sliceAndSort(array, commands[2])).toBe(3);
});

test('sliceAndSort 연산 결과를 배열에 담자', () => {
  expect(solution(array, commands)).toStrictEqual([5, 6, 3]);
});
