// 풀이 1: 정답은 맞으나 효율성 테스트에서 계속 fail.
function solution(n) {
  const arrayToN = Array(n)
    .fill(0)
    .map((_, i) => i + 1);

  return arrayToN.reduce((acc, cur) => (isPrime(cur) ? (acc += 1) : acc), 0);
}

function isPrime(num) {
  if (num === 1) {
    return false;
  }

  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// 풀이 2: 이또한 효율성 테스트에서 실패.
function solution(n) {
  let answer = 0;

  for (let i = 2; i <= n; i += 1) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j += 1) {
      if (i % j === 0) {
        isPrime = false;

        break;
      }
    }

    if (isPrime) {
      answer += 1;
    }
  }

  return answer;
}

// 풀이 3:
// 풀이 참고: https://velog.io/@reasonz/프로그래머스-소수-찾기-JS-에라토스테네스의-체
function solution(n) {
  let answer = 0;
  const prime = [];
  const array = Array(n).fill(0);

  for (let i = 2; i <= n; i += 1) {
    array[i] = i;
  }

  for (let i = 2; i <= n; i += 1) {
    if (array[i] === 0) {
      continue;
    }

    prime.push(i);
    array[i] = 0;

    for (let j = i * 2; j <= n; j += i) {
      if (array[j] === 0) {
        continue;
      }

      array[j] = 0;
    }

    console.log(prime);
  }

  answer = prime.length;

  return answer;
}

console.log(solution(10), '정답: 4');
console.log(solution(5), '정답: 3');
