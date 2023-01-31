function solution(arr1, arr2) {
  const answer = new Array(arr1.length).fill(0)
    .map(() => new Array(arr2[0].length).fill(0));

  for (let i = 0; i < arr1.length; i += 1) {
    for (let j = 0; j < arr2[0].length; j += 1) {
      for (let k = 0; k < arr1[0].length; k += 1) {
        answer[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return answer;
}
