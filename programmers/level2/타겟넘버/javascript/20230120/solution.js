let result = 0;

function solution(numbers, target) {
  dfs(numbers, target, 0, 0);

  const answer = result;
  return answer;
}

function dfs(numbers, target, index, sum) {
  if (index === numbers.length) {
    if (sum === target) {
      result += 1;
    }

    return;
  }
  
  dfs(numbers, target, index + 1, sum + numbers[index]);
  dfs(numbers, target, index + 1, sum - numbers[index]);
}
