export function split(n) {
  return `${n}`.split('');
}

export function sort(array) {
  return [...array].map(Number).sort((a, b) => b - a);
}

export function join(array) {
  return parseInt(array.join(''), 10);
}

function solution(n) {
  const sortedNumbers = sort(split(n));
  return join(sortedNumbers);
}
