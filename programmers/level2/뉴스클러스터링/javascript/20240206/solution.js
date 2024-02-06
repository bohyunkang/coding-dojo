function splitStr(str) {
  const word = str.toLowerCase();
  const words = [];

  for (let i = 0; i < word.length - 1; i += 1) {
    const a = word.charAt(i);
    const b = word.charAt(i + 1);

    if (a >= 'a' && a <= 'z' && b >= 'a' && b <= 'z') {
      words.push(a + b);
    }
  }

  console.log(words);

  return words;
}

function unionAndIntersection(str1, str2) {
  const set = new Set([...str1, ...str2]);

  let union = 0;
  let intersection = 0;

  set.forEach((item) => {
    const has1 = str1.filter((value) => value === item).length;
    const has2 = str2.filter((value) => value === item).length;

    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  });

  return [union, intersection];
}

function solution(str1, str2) {
  const [union, intersection] = unionAndIntersection(
    splitStr(str1),
    splitStr(str2),
  );

  const answer = Math.floor((intersection / union) * 65536);

  return isNaN(answer) ? 65536 : answer;
}

console.log(solution('FRANCE', 'french'), '정답: 16384');
console.log(solution('handshake', 'shake hands'), '정답: 65536');
console.log(solution('aa1+aa2', 'AAAA12'), '정답: 43690');
console.log(solution('E=M*C^2', 'e=m*c^2'), '정답: 65536');
