import solution from './solution';

test('키패드 누르기', () => {
  expect(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right')).toBe('LRLLLRLLRRL');
  expect(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left')).toBe('LRLLRRLLLRR');
  expect(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right')).toBe('LLRLLRLLRL');
});
