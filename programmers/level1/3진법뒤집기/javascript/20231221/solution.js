// 1. toString 메서드의 인자값으로 radix을 넘겨주면 원하는 진수로 바꾼후 문자열로 반환.
// 2. 그 문자열을 뒤집어야 하므로 split하여 배열로 만든 후, reverse
// 3. 다시 join으로 뒤집어진 배열을 합쳐줌
// 4. parseInt를 사용해서 다시 10진수로 변환해줌.
function solution(n) {
  const reversedNumber = n.toString(3).split('').reverse().join('');
  // const reversedNumber = [...n.toString(3)].reverse().join('');
  const answer = parseInt(reversedNumber, 3);

  return answer;
}

console.log(solution(45), '정답: 7');
console.log(solution(125), '정답: 229');
