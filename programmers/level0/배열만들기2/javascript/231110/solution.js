function solution(l, r) {
  const answer = extractNumber(l, r);

  if (answer.length === 0) {
    return [-1];
  }

  return answer;
}

function extractNumber(start, end) {
  const array = makeArray(start, end);

  const pattern = /^[05]+$/;

  return array.filter((num) => typeof num === 'number' && pattern.test(num));
}

function makeArray(start, end) {
  const array = [];

  while (start <= end) {
    array.push(start);
    start += 1;
  }

  return array;
}
