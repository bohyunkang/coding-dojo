function processZero(lottos) {
  // console.log(lottos.reduce((count, element) => count + (element === 0), 0)); // 이렇게도 표현 가능!
  return lottos.filter((element) => element === 0).length;
}

function compareNumbers(lottos, win_nums) {
  return lottos.filter((number) => win_nums.includes(number)).length;
}

function result(zeros, matches) {
  const best = zeros + matches;

  return [Math.min(7 - best, 6), Math.min(7 - matches, 6)];
}

function solution(lottos, win_nums) {
  const zeros = processZero(lottos);
  const matches = compareNumbers(lottos, win_nums);
  console.log(result(zeros, matches));
  return result(zeros, matches);
}

// === test ===
// processZero([0, 0, 0, 0, 0, 0]);
// compareNumbers([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
// compareNumbers([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]);
// compareNumbers([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]);
// solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
// solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]);
// solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]);
