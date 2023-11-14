function solution(number) {
  const compareNumber = sortAsc(number);

  return compareNumber === '0123456789' ? true : false;
}

function sortAsc(number) {
  const ascNumber = number
    .split('')
    .sort((a, b) => a - b)
    .join('');

  return ascNumber;
}
