function solution(num) {
  const ODD = 'Odd';
  const EVEN = 'Even';

  if (num % 2 === 1 || num % 2 === -1) {
    return ODD;
  }

  if (num % 2 === 0 || num === 0) {
    return EVEN;
  }
}
