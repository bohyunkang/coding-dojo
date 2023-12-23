// 풀이 과정
// 1. 가로 세로 중에 더 큰 것을 가로 배열로 몬다.
// 2. 가로 세로 중에 더 작은 것을 세로 배열로 몬다.
// 3. 가로 배열 중에 큰 값 * 세로 배열 중에 큰 값을 곱하여 반환한다.
function solution(sizes) {
  const widthArray = [];
  const heightArray = [];

  sizes.forEach((item) => {
    if (item[0] >= item[1]) {
      widthArray.push(item[0]);
      heightArray.push(item[1]);
    }

    if (item[0] < item[1]) {
      widthArray.push(item[1]);
      heightArray.push(item[0]);
    }
  });

  const width = Math.max(...widthArray);
  const height = Math.max(...heightArray);

  return width * height;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ]),
  '정답: 4000',
);
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ]),
  '정답: 120',
);
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ]),
  '정답: 133',
);
