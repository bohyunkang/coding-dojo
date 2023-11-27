function solution(string) {
  const numbers = string.split(' ').map(Number);

  let answer = numbers[0];

  numbers.forEach((number) => {
    if (number <= answer) {
      answer = number;
    }
  });

  console.log(answer); // test

  return answer;
}

// test
solution('6 5 11');
solution('12 8 2');
