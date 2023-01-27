public class Solution {
    public int[] solution(int brown, int yellow) {
        int[] answer = new int[2];
        int sum = brown + yellow;

        for (int i = 1; i <= sum; i += 1) {
            int row = i;
            int column = sum / row;

            if (column < row) {
                continue;
            }

            if ((column - 2) * (row - 2) == yellow) {
                answer[0] = column;
                answer[1] = row;

                break;
            }
        }

        return answer;
    }
}
