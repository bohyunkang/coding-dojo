public class Solution {
    public int solution(int n, int a, int b) {
        int round = 0;

        int A = a;
        int B = b;

        for (int i = 0; i < n / 2; i += 1) {
            round += 1;

            if ((A % 2 + A / 2) == (B % 2 + B / 2)) {
                return round;
            }

            A = A % 2 + A / 2;
            B = B % 2 + B / 2;
        }

        return round;
    }
}
