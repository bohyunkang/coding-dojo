public class Solution {
    public int solution(int n) {
        int answer = 1;

        for (int i = 1; i < n; i += 1) {
            if (expression(i, n)) {
                answer += 1;
            }
        }

        return answer;
    }

    public boolean expression(int currentNumber, int target) {
        int sum = 0;

        for (int i = currentNumber; i < target; i += 1) {
            sum += i;

            if (sum > target) {
                return false;
            }

            if (sum == target) {
                return true;
            }
        }

        return false;
    }
}
