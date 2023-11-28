function solution1(arr) {
  let answer = arr[0];

  for (let i = 0; i < arr.length; i += 1) {
    if (answer >= arr[i]) {
      answer = arr[i];
    }
  }

  return answer;
}

console.log(solution1([5, 3, 7, 11, 2, 15, 17]));
