function solution(n, a, b) {
  let round = 0;

  let A = a;
  let B = b;

  for (let i = 0; i < n / 2; i += 1) {
    if ((A % 2 + A / 2) === (B % 2 + B / 2)) {
      return round;
    }

    round += 1;

    A = Math.floor(A % 2 + A / 2);
    B = Math.floor(B % 2 + B / 2);
  }

  return round;
}
