function solution(arr) {
  return arr.map((i) => {
    if (i >= 50 && i % 2 === 0) {
      return i / 2;
    }
    if (i < 50 && i % 2 !== 0) {
      return i * 2;
    }

    return i;
  });
}
