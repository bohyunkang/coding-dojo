function solution(arr) {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);

  return sum / arr.length;
}
