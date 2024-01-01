function solution(keymap, targets) {
  const keymaps = new Map();

  for (let i = 0; i < keymap.length; i += 1) {
    const keys = [...keymap[i]];

    for (let j = 0; j < keys.length; j += 1) {
      if (keymaps.has(keys[j])) {
        if (keymaps.get(keys[j]) < j + 1) {
          continue;
        }
      }

      keymaps.set(keys[j], j + 1);
    }
  }

  const answer = targets.map((target) => {
    return [...target].reduce((acc, cur) => {
      if (!keymaps.has(cur)) {
        return -1;
      }

      if (keymaps.has(cur)) {
        if (acc === -1) {
          return -1;
        }

        return acc + keymaps.get(cur);
      }

      return -1;
    }, 0);
  });

  return answer;
}

console.log(solution(['ABACD', 'BCEFD'], ['ABCD', 'AABB']), '정답: [9,4]');
console.log(solution(['AA'], ['B']), '정답: [-1]');
console.log(solution(['AGZ', 'BSSS'], ['ASA', 'BGZ']), '정답: [4,6]');
console.log(solution(['ABCDEFGHIJ'], ['JJJJJJJJJJJ']), '정답: [110]');
console.log(solution(['A', 'AB', 'B'], ['B']), '정답: [1]');
console.log(solution(['BC'], ['AC', 'BC']), '정답: [-1, 3]');
