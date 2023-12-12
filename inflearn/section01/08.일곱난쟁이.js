function solution(arr) {
  const sum = arr.reduce((sum, cur) => sum + cur, 0);
  let notDwarf1;
  let notDwarf2;

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (sum - arr[i] - arr[j] === 100) {
        notDwarf1 = i;
        notDwarf2 = j;
        break;
      }
    }

    if (notDwarf1 + notDwarf2 > 0) {
      break;
    }
  }

  arr.splice(notDwarf2, 1);
  arr.splice(notDwarf1, 1);

  return arr;
}

console.log(
  solution([20, 7, 23, 19, 10, 15, 25, 8, 13]),
  '기대하는 값: [20, 7, 23, 19, 10, 8, 13]',
);

console.log(
  solution([22, 7, 21, 19, 10, 15, 25, 8, 13]),
  '기대하는 값: [22, 7, 10, 15, 25, 8, 13]',
);
