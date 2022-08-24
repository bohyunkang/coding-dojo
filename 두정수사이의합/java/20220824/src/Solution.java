class Solution {
    public long solution(int a, int b) {
        long answer = 0;

        if (a != b) {
            answer = ((long)a + b) * (Math.abs(b - a) + 1) / 2;
        }

        return answer;
    }
}