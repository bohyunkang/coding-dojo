function solution(date, arr) {
  const onesArray = makeArrayOnes(arr);

  return onesArray.reduce((numberOfCars, currentCarNumber) => {
    if (currentCarNumber === date) {
      numberOfCars += 1;
    }

    return numberOfCars;
  }, 0);
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]), '기대하는 값은: 3');
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30]), '기대하는 값은: 3');

function makeArrayOnes(arr) {
  const array = [];

  arr.map((number) => {
    array.push(number % 10);
  });

  return array;
}

console.log(makeArrayOnes([25, 23, 11, 47, 53, 17, 33]), '기대하는 값: [5, 3 ,1, 7, 3, 7, 3]');
