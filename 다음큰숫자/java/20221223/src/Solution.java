public class Solution {
    public int solution(int n) {
        int answer = n + 1;

        while (!isEqualCountOfOne(n, answer)) {
            answer += 1;
        }

        return answer;
    }

    public boolean isEqualCountOfOne(int n, int target) {
        return countOfOne(n) == countOfOne(target);
    }

    public int countOfOne(int number) {
        return Integer.bitCount(number);
    }
}
