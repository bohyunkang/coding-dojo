class Solution {
    public int solution(int n) {
        int answer = 0;

        for(int i = 2; i <= n; i += 1){
            boolean isPrime = true;

            for(int j = 2; j <= Math.sqrt(i); j += 1) {
                if(i % j == 0) {
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
}
