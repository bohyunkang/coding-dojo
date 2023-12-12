// 풀이 1
function solution(s) {
  const array = s.split('');
  const answer = [];

  array.map((string) => {
    if (!answer.includes(string)) {
      return answer.push(string);
    }
  });

  return answer.join('');
}

console.log(solution('ksekkset'), '정답: kset');
console.log(solution('sstuudyy'), '정답: study');

// 풀이 2: indexOf 사용
function solution2(s) {
  let answer = '';

  for (let i = 0; i < s.length; i += 1) {
    if (s.indexOf(s[i]) === i) {
      answer += s[i];
    }
  }

  return answer;
}

console.log(solution2('ksekkset'), '정답: kset');
console.log(solution2('sstuudyy'), '정답: study');
