// 풀이 1
function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a > b ? 1 : -1;
    }

    return a[n] > b[n] ? 1 : -1;
  });
}

// 풀이 2
// localeCompare
// 시간은 풀이 1이 월등히 빠르게 끝나는..
function solution(strings, n) {
  return strings.sort((a, b) =>
    a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]),
  );
}

console.log(solution(['sun', 'bed', 'car'], 1), '정답: ["car", "bed", "sun"]');
console.log(
  solution(['abce', 'abcd', 'cdx'], 2),
  '정답: ["abcd", "abce", "cdx"]',
);
