// 1. for문 사용
function solution1(arr) {
  let answer = arr[0];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] <= answer) {
      answer = arr[i];
    }
  }

  return answer;
}

console.log(solution1([5, 3, 7, 11, 2, 15, 17]), '기대하는 값: 2');

// 2. reduce 사용
function solution2(arr) {
  return arr.reduce((prev, curr) => {
    return curr <= prev ? curr : prev;
  });
}

console.log(solution2([5, 3, 7, 11, 2, 15, 17]), '기대하는 값: 2');

// 3. 내장함수(Math.min) 사용
function solution3(arr) {
  // 만약 전개연산자 ...을 사용하지 않으려면 아래와 같이 쓰면 됨.
  // return Math.min.apply(null, arr);
  return Math.min(...arr);
}

console.log(solution3([5, 3, 7, 11, 2, 15, 17]), '기대하는 값: 2');
