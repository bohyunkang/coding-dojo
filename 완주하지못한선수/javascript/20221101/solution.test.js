import solution, { getSortedArray, useForLoop } from './solution';

test('배열을 오름차순으로 정렬한다.', () => {
  const array1 = ['leo', 'kiki', 'eden'];
  expect(getSortedArray(array1)).toStrictEqual(['eden', 'kiki', 'leo']);

  const array2 = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
  expect(getSortedArray(array2)).toStrictEqual(['filipa', 'josipa', 'marina', 'nikola', 'vinko']);
});

test('완주하지 못한 선수를 돌려주자.', () => {
  const participant1 = ['leo', 'kiki', 'eden'];
  const completion1 = ['eden', 'kiki'];

  expect(solution(participant1, completion1)).toBe('leo');

  const participant2 = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
  const completion2 = ['josipa', 'filipa', 'marina', 'nikola'];

  expect(solution(participant2, completion2)).toBe('vinko');

  const participant3 = ['mislav', 'stanko', 'mislav', 'ana'];
  const completion3 = ['stanko', 'ana', 'mislav'];

  expect(solution(participant3, completion3)).toBe('mislav');
});

test('for-loop 사용해보기', () => {
  const participant1 = ['leo', 'kiki', 'eden'];
  const completion1 = ['eden', 'kiki'];

  expect(useForLoop(participant1, completion1)).toBe('leo');

  const participant2 = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
  const completion2 = ['josipa', 'filipa', 'marina', 'nikola'];

  expect(useForLoop(participant2, completion2)).toBe('vinko');
});
