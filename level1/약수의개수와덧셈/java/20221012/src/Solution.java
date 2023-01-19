public class Solution {
    public int solution(int left, int right) {
        int answer = 0;

        for(int i = left; i <= right; i += 1) {
            int count = 0;

            for(int j = 1; j <= i; j += 1) {
                if(i % j == 0) {
                    count += 1;
                }
            }

            if(count % 2 == 0) {
                answer += i;
            }

            if (count % 2 == 1) {
                answer -= i;
            }
        }

        return answer;
    }
}
