public class Solution {
    public int solution(int num) {
        long number = (long) num;
        int answer = 0;

        while (number != 1) {
            answer += 1;

            number = compute(number);

            if (answer >= 500) {
                answer = -1;
                return answer;
            }
        }

        return answer;
    }

    public long compute(long number) {
        if (isEven(number)) {
            return number / 2;
        }

        return number * 3 + 1;
    }

    public boolean isEven(long x) {
        return x % 2 == 0;
    }
}
