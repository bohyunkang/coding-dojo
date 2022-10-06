import java.util.stream.IntStream;

public class Solution {
    public int solution(int n) {
        return computeRemainder(n);
    }

    public int computeRemainder(int n) {
        int answer = 0;

        for (int i = 1; i < n; i += 1) {
            if (n % i == 1) {
                answer = i;
                break;
            }
        }
        return answer;
    }
}
