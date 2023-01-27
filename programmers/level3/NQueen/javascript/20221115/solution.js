let N;
const array = [];
let count = 0;

function isVulnerable(col) {
  for (let i = 0; i < col; i += 1) {
    if (array[col] === array[i]) {
      return false;
    }

    if (Math.abs(col - i) === Math.abs(array[col]- array[i])) {
      return false;
    }
  }

  return true;
}

function nQueen(depth) {
  if (depth === N) {
    count += 1;
    return;
  }

  for (let i = 0; i < N; i += 1) {
    array[depth] = i;

    if (isVulnerable(depth)) {
      nQueen(depth + 1);
    }
  }
}

function solution(n) {
  N = n;

  nQueen(0);

  // console.log(count);
  return count;
}

// --- test ---
// solution(4);