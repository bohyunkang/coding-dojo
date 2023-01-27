public class Solution {
    public int[] solution(String s) {
        int countIteration = 0;
        int countZero = 0;

        while(s.length() != 1) {
            int countOne = 0;

            for(int i = 0; i < s.length(); i += 1) {
                if (s.charAt(i) == '0') {
                    countZero += 1;

                    continue;
                }

                countOne += 1;
            }

            s = Integer.toBinaryString(countOne);

            countIteration += 1;
        }

        return new int[]{countIteration, countZero};
    }
}
