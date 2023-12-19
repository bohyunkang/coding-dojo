// 풀이 1(풀이 실패)
// 계속 테스트케이스에서 몇개씩 통과를 못하는데, 그 이유가 5e3와 같은 지수표기법으로 인해서.. 실제로 알파벳이 들어가 있어도 숫자로 생각한다는 뭐 그런 이유 때문에 풀다가 안 풀려서 정규표현식으로 바꿔 풀음. 다른 풀이 방법으로 다시 풀어보자.(should try again 라벨 달기!)
function solution(s) {
  if (s.length === 4 || s.length === 6) {
    for (let i = 0; i < s.length; i += 1) {
      return Number.isSafeInteger(Number(s[i]));
    }
  }

  return false;
}

// 풀이 2
function solution(s) {
  const pattern = /[0-9]/g;

  return s.length === 4 || s.length === 6
    ? s.length === s.match(pattern).length
    : false;
}
