function solution(a, b, c) {
  const triangle = [a, b, c].sort((a, b) => a - b);

  if (triangle[2] < triangle[0] + triangle[1]) {
    return 'YES';
  }

  return 'NO';
}

console.log(solution(6, 7, 11), '기대되는 값: YES');
console.log(solution(13, 33, 17), '기대되는 값: NO');
