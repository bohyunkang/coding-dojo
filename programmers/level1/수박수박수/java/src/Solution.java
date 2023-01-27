public class Solution {
    public String solution(int n) {
        StringBuilder answer = new StringBuilder();

        for (int i = 0; i < n; i += 1) {
            if (isEven(i)) {
                answer.append("수");
            }

            if (!isEven(i)) {
                answer.append("박");
            }
        }

        return answer.toString();
    }

    public boolean isEven(int n) {
        return n % 2 == 0;
    }
}
