function solution(s) {
  let convertCount = 0;
  let zeroCount = 0;

  while (s !== '1') {
    let oneCount = 0;

    for (let i = 0; i < s.length; i += 1) {
      if (s[i] === '0') {
        zeroCount += 1;
        continue;
      }

      oneCount += 1;
    }

    s = oneCount.toString(2);
    convertCount += 1;
  }

  return [convertCount, zeroCount];
}

console.log(solution('110010101001'), '정답: [3,8]');
console.log(solution('01110'), '정답: [3,3]');
console.log(solution('1111111'), '정답: [4,1]');
