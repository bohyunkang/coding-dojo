function solution(s) {
  let countZero = 0;
  let countIteration = 0;

  while (s !== '1') {
    let countOne = 0;

    for (let i = 0; i < s.length; i += 1) {
      if (s[i] === '0') {
        countZero += 1;

        continue;
      }

      countOne += 1;
    }

    s = countOne.toString(2);

    countIteration += 1;
  }

  return [countIteration, countZero];
}
