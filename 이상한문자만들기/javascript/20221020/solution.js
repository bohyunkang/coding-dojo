export default function solution(s) {
  return s
    .split(' ')
    .map((i) =>
      i
        .split('')
        .map((j, index) => (index % 2 === 1 ? j.toLowerCase() : j.toUpperCase()))
        .join(''),
    )
    .join(' ');
}
