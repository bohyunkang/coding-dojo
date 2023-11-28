function solution(arr) {
  let sum;
  let min;

  const oddNumbers = extractOddNumbers(arr);

  sum = oddNumbers.reduce((sum, curr) => sum + curr, 0);
  min = Math.min(...oddNumbers);

  console.log(sum, '기대하는 값: 256');
  console.log(min, '기대하는 값: 41');

  return sum, min;
}

solution([12, 77, 38, 41, 53, 92, 85]);

function extractOddNumbers(arr) {
  const array = [];

  arr.map((number) => {
    if (number % 2 === 1) {
      array.push(number);
    }
  });

  console.log(array, '기대하는 값: 77, 41, 53, 85');

  return array;
}

extractOddNumbers([12, 77, 38, 41, 53, 92, 85]);
