function getLength(index, number) {
  index = (index === 0) ? 11 : index;
  number = (number === 0) ? 11 : number;

  return Math.floor(Math.abs(index - number) / 3) + (Math.abs(index - number) % 3);
}

export default function solution(numbers, hand) {
  let answer = '';
  let leftIndex = 10;
  let rightIndex = 12;

  numbers.forEach((number) => {
    if (number === 1 || number === 4 || number === 7) {
      answer += 'L';
      leftIndex = number;
      return;
    }

    if (number === 3 || number === 6 || number === 9) {
      answer += 'R';
      rightIndex = number;
      return;
    }

    const leftLength = getLength(leftIndex, number);
    const rightLength = getLength(rightIndex, number);

    if (leftLength > rightLength) {
      answer += 'R';
      rightIndex = number;
      return;
    }

    if (leftLength < rightLength) {
      answer += 'L';
      leftIndex = number;
      return;
    }

    if (hand === 'right') {
      answer += 'R';
      rightIndex = number;
      return;
    }

    if (hand === 'left') {
      answer += 'L';
      leftIndex = number;
    }
  });

  return answer;
}
