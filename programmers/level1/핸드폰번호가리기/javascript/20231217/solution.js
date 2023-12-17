// 풀이 1: substr, repeat 사용해서 문제 풀이
// repeat이 바로 생각나지 않아서 구글링함 ㅠ 이제 알았으니 문자열 반복하고 싶다면 repeat을 사용하도록 하자.
// 정규표현식으로도 풀어보자!
function solution(phone_number) {
  const length = phone_number.length;
  const blindLength = phone_number.substr(0, length - 4).length;
  const lastDigits = phone_number.substr(-4, 4);

  return '*'.repeat(blindLength) + lastDigits;
}

// 풀이 2: 정규표현식 사용
// \d: 숫자
// \d{4}: 숫자 4자리
// ?=: 앞쪽 일치(Lookahead)
function solution(phone_number) {
  return phone_number.replace(/\d(?=\d{4})/g, '*');
}

console.log(solution('01033334444'), '정답: *******4444');
console.log(solution('027778888'), '정답: *****8888');
