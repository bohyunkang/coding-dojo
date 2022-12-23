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

    public long countOfOne(int number) {
        String binaryString = Integer.toBinaryString(number);

        return binaryString.chars()
                .filter(c -> c == '1')
                .count();
    }
}
