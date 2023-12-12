// 풀이 1
function solution(n) {
  const array = Array(n)
    .fill()
    .map((_, i) => i + 1);

  for (let i = 0; i < array.length; i += 1) {
    if (n % array[i] === 1) {
      return array[i];
    }
  }
}

// 풀이 2: 굳이 배열을 만들지 않아도 되겠다는 생각이 들어 재풀이.
function solution(n) {
  for (let i = 1; i < n; i += 1) {
    if (n % i === 1) {
      return i;
    }
  }
}
