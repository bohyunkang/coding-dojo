function solution(n) {
  const numbers = n.toString().split('');
  const reversedNumbers = numbers.reverse();

  return reversedNumbers.map((i) => parseInt(i));
}
