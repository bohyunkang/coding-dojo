class Solution {
    public long[] solution(int x, int n) {
        long[] answer = new long[n];

        long number = x;

        for (int i = 0; i < answer.length; i += 1) {
            answer[i] = number;
            number += x;
        }

        return answer;
    }
}