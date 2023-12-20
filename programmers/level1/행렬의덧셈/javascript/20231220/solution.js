// 풀이 1
function solution(arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i += 1) {
    const tmpArray = [];

    for (let j = 0; j < arr1[i].length; j += 1) {
      tmpArray.push(arr1[i][j] + arr2[i][j]);
    }

    answer.push(tmpArray);
  }

  return answer;
}

// 풀이 2
function solution(arr1, arr2) {
  return arr1.map((item, i) => item.map((elem, j) => elem + arr2[i][j]));
}
