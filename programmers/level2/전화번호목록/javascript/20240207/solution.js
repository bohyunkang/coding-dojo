// 풀이 1: 효율성에서 시간 초과
function isPrefix(pivot, array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].startsWith(pivot)) {
      return true;
    }
  }

  return false;
}

function solution(phone_book) {
  for (let i = 0; i < phone_book.length; i += 1) {
    const pivot = phone_book[i];
    const array = phone_book.filter((number) => number !== pivot);

    if (isPrefix(pivot, array)) {
      return false;
    }
  }

  return true;
}

console.log(solution(['119', '97674223', '1195524421']), '정답: false');
console.log(solution(['123', '456', '789']), '정답: true');
console.log(solution(['12', '123', '1235', '567', '88']), '정답: false');
