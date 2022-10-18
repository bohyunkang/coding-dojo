export default function solution(n) {
  return [...`${n}`].map(Number).reduce((a, b) => a + b);
}
