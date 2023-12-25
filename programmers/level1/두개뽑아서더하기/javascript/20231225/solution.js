// 풀이 1
function solution(numbers) {
  numbers.sort((a, b) => a - b);

  const array = [];

  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = 1; j < numbers.length; j += 1) {
      if (i !== j) {
        array.push(numbers[i] + numbers[j]);
      }
    }
  }

  return array
    .filter((item, i) => array.indexOf(item) === i)
    .sort((a, b) => a - b);
}

// 풀이 2
function solution(numbers) {
  const array = [];

  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = 1; j < numbers.length; j += 1) {
      if (i !== j) {
        array.push(numbers[i] + numbers[j]);
      }
    }
  }

  const answer = [...new Set(array)];
  return answer.sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]), '정답: [2,3,4,5,6,7]');
console.log(solution([5, 0, 2, 7]), '정답: [2,5,7,9,12]');
