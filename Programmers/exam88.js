// n이 1일때 = 방법은 1개
// n이 2일때 = 방법은 2개
// n이 3일때 = 방법은 3개
// n이 4일때 = 방법은 5개
// n이 5일때 = 방법은 8개
// 피보나치 수열

function solution(n) {
  const dp = [];
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1234567;
  }
  return dp[n];
}
