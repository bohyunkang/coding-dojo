// 풀이 과정
// 1. 합을 구하기 위해 for문을 3번 순회하면서 배열 속 세 숫자를 더한다.
// 2. 인덱스가 같은 경우에는 더하지 않고 skip
// 3. 더한 값이 소수라면 answer를 +1 증가시킨다.
function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      for (let k = j + 1; k < nums.length; k += 1) {
        if (i === j || i === k || j === k) {
          continue;
        }

        const total = nums[i] + nums[j] + nums[k];

        if (isPrime(total)) {
          answer += 1;
        }
      }
    }
  }

  return answer;
}

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(solution([1, 2, 3, 4]), '정답: 1');
console.log(solution([1, 2, 7, 6, 4]), '정답: 4');
console.log(solution([1, 2, 8, 4, 5]), '정답: 5');
