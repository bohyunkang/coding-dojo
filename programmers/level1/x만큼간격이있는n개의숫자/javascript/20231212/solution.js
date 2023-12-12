// 풀이 1
function solution(x, n) {
  const array = Array(n)
    .fill()
    .map((_, i) => i + 1);

  const answer = array.map((num) => num * x);
  return answer;
}

// 풀이 1-2: map 한번만 돌리기
function solution(x, n) {
  const answer = Array(n)
    .fill()
    .map((_, i) => (i + 1) * x);

  return answer;
}

// 풀이 1-3: 미리 값을 배열에 다 채워놓고, 그 값을 곱하는 식으로 풀이
function solution(x, n) {
  const answer = Array(n)
    .fill(x)
    .map((num, i) => (i + 1) * num);

  return answer;
}

// 풀이 2: for문으로 풀이
function solution(x, n) {
  const answer = [];

  for (let i = 1; i <= n; i += 1) {
    answer.push(x * i);
  }

  return answer;
}

// 풀이 3: keys() 메서드 활용
function solution(x, n) {
  return [...Array(n).keys()].map((_, i) => (i + 1) * x);
}
