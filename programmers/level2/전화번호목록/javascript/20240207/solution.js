// 풀이 1: 효율성에서 시간 초과(효율성 3,4번 테스트케이스)
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

// 풀이 2: 똑같이 3,4번 테케 통과 못함
function solution(phone_book) {
  for (let i = 0; i < phone_book.length; i += 1) {
    const pivot = phone_book[i];

    for (let j = 0; j < phone_book.length; j += 1) {
      if (i === j) {
        continue;
      }

      if (phone_book[j].startsWith(pivot)) {
        return false;
      }
    }
  }

  return true;
}

/**
 * 풀이 3: 모든 케이스 통과
 * 1. phone_book을 정렬한다.
 * 2. 모든 배열을 순회하며, 기준을 phone_book[i]로 잡고, i와 i + 1을 비교하여 접두어면 false, 아니면 true 반환
 */
function solution(phone_book) {
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i += 1) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }

  return true;
}

console.log(solution(['119', '97674223', '1195524421']), '정답: false');
console.log(solution(['123', '456', '789']), '정답: true');
console.log(solution(['12', '123', '1235', '567', '88']), '정답: false');
