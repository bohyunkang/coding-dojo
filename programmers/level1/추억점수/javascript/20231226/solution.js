// 풀이 1
// 1. scores라는 객체에 name을 key값으로, yearning을 value값으로 담음
// 2. photo를 map으로 순회하며 각 요소인 배열을 다시 reduce로 돌면서, 만약 score의 키값이 해당 이름을 가지고 있다면,
// 3. 추억 점수를 더해주고, 아니면 그냥 acc를 반환해서 추억점수만 누적함
// 4. 그렇게 생성된 배열을 정답으로 반환
function solution(name, yearning, photo) {
  const scores = {};

  name.forEach((element, i) => {
    scores[element] = yearning[i];
  });

  return photo.map((items) =>
    items.reduce(
      (acc, item) =>
        Object.keys(scores).includes(item) ? acc + scores[item] : acc,
      0,
    ),
  );
}

// 풀이 2
// 풀이 1처럼 객체를 굳이 만들어주지 않고도 풀 수 있음.
// 1. photo를 map으로 순회하면서 각 요소 배열을 reduce한다.
// 2. name과 yearning은 위치가 대칭되기에 그 값을 활용해서
// 만약 yearning에 name의 cur의 인덱스를 가지고 있다면? 그 값을 더 해주고, 아닌 경우 0을 반환한다.
// (다시 개념정리) 연산자??는 왼쪽이 null/undefined인 경우 오른쪽 값을 반환한다.
function solution(name, yearning, photo) {
  return photo.map((item) =>
    item.reduce((acc, cur) => (acc += yearning[name.indexOf(cur)] ?? 0), 0),
  );
}

console.log(
  solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [
      ['may', 'kein', 'kain', 'radi'],
      ['may', 'kein', 'brin', 'deny'],
      ['kon', 'kain', 'may', 'coni'],
    ],
  ),
  '정답: [19, 15, 6]',
);
