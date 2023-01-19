function solution(n) {
  const answer = getWays(n);

  return answer;
}

function getWays(n) {
  const dp = [1, 1];

  for (let i = 2; i < n + 1; i += 1) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }

  return dp[n];
}
