public class Solution {
    public int[] solution(int[] lottos, int[] win_nums) {
        int zeros = processZero(lottos);
        int matches = compareNumbers(lottos, win_nums);

        return result(zeros, matches);
    }

    public int processZero(int[] lottos) {
        int zeroCount = 0;

        for (int lotto : lottos) {
            if (lotto == 0) {
                zeroCount += 1;
            }
        }

        return zeroCount;
    }

    public int compareNumbers(int[] lottos, int[] win_nums) {
        int matchNumbers = 0;

        for (int win_num : win_nums) {
            for (int lotto : lottos) {
                if (win_num == lotto) {
                    matchNumbers += 1;
                }
            }
        }

        return matchNumbers;
    }

    public int[] result(int zeros, int matches) {
        int best = zeros + matches;

        return new int[]{Math.min(7 - best, 6), Math.min(7 - matches, 6)};
    }
}
