// 풀이 1
function solution(seoul) {
  for (let i = 0; i < seoul.length; i += 1) {
    if (seoul[i] === 'Kim') {
      return `김서방은 ${i}에 있다`;
    }
  }
}

// 풀이 2
function solution(seoul) {
  return `김서방은 ${seoul.indexOf('Kim')}에 있다`;
}

// 풀이 3
function solution(seoul) {
  const index = seoul.findIndex((surname) => surname === 'Kim');

  return `김서방은 ${index}에 있다`;
}

console.log(solution(['Jane', 'Kim'], '정답: 김서방은 1에 있다'));
console.log(solution(['Kim', 'Jane'], '정답: 김서방은 0에 있다'));
