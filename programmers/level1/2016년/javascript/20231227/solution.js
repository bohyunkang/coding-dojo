// 풀이 과정
// 1. 요일을 담은 배열 daysOfWeek를 미리 준비
// 2. Date 객체의 getDay 메서드를 활용하여 2016년 a월 b일의 요일을 구한다.
// 3. getDay의 결과값은 일요일인 0부터 토요일인 6까지의 값을 반환하기에 해당 값을 바로 daysOfWeek의 인덱스로 활용하여 결과를 구한다.
// 추가로 new Date(2016, a, b)로 쓰고 싶다면 두번째인자인 month는 0부터 시작하기 때문에 a - 1을 해줘야 한다. 그래서 명확하게 문자열로 2016-MM-DD형식으로 넣어주는 게 베스트인듯!
function solution(a, b) {
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const day = new Date(`2016-${a}-${b}`).getDay();
  // const day = new Date(2016, a - 1, b).getDay();

  return daysOfWeek[day];
}

console.log(solution(5, 24), '정답: TUE');
