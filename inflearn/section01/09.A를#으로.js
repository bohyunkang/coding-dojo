function solution(s) {
  if (!isUppercase(s)) {
    return;
  }

  if (!s.includes('A')) {
    return;
  }

  return s.replaceAll('A', '#');
}

function isUppercase(s) {
  return s === s.toUpperCase();
}

console.log(solution('BANANA'), 'BANANA > B#N#N#');
console.log(solution('ABC'), 'ABC > #BC');
console.log(solution('abd'), 'abd > undefined');
console.log(solution('BHC'), 'BHC > undefined');
