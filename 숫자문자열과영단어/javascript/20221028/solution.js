const NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

export function convertToStringNumber(s) {
  const words = s.split('');
  return [...words.keys()].reduce((acc, i) => acc.replace(NUMBERS[i], i), s);
}

export default function solution(s) {
  return Number(convertToStringNumber(s));
}
