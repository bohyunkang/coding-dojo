// 풀이 1
// 1. 각각의 변수를 한눈에 이해하기 편하게 변수 toReturn, free, empty에 담는다.
// 2. 정답으로 반환할 변수 answer를 0으로 초기화한다.
// 3. 빈 병 수가 교환받는 콜라 수보다 크거나 같을 경우에만 반복하며 answer와 empty를 연산한다.
// 4. answer는 바꿀 수 있는 빈병 수 * 교환받은 콜라 수로 계산한다.
// 5. empty는 바꿀 수 있는 빈병 수(=교환하고 먹으면 또 빈 병이 됨) + 교환하면서 남은 짜투리 빈 병
function solution(a, b, n) {
  let toReturn = a; // 콜라를 받기 위해 마트에 주어야 하는 병 수 a
  let free = b; // 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수 b
  let empty = n; // 상빈이가 가지고 있는 빈 병의 개수 n

  let answer = 0;

  while (empty >= toReturn) {
    // 바꿀 수 있는 빈 병 수 * 교환받는 콜라 수
    answer += Math.floor(empty / toReturn) * free;
    // 바꿀 수 있는 빈 병 수(교환하고 먹으면 빈 병) + 교환하고 남은 빈 병
    empty = Math.floor(empty / toReturn) * free + (empty % toReturn);
  }

  return answer;
}

// 풀이 2(다른 사람 풀이)
// 해석: 결국 a를 주고 b를 돌려받는다는 것은 한번 교환했을 때 a - b만큼 없어지는 것
// 예를 들어 9병이고 a:3, b:1라 하면 결국 3병을 교환하고 1병을 받으니 a - b를 하면 2병씩 없어짐
// 그래서 n / (a - b) 를 해주면 몇번째에 n이 0이 되는지 알 수 있음
function solution(a, b, n) {
  return Math.floor(Math.max(n - b, 0) / (a - b)) * b;
}

console.log(solution(2, 1, 20), '정답: 19');
console.log(solution(3, 1, 20), '정답: 9');
console.log(solution(3, 2, 20), '정답: 36');
console.log(solution(3, 2, 10), '정답: 16');
