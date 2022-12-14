class Solution {
    private int[] answer;

    public int[] solution(int n, int m) {
        answer = new int[2];

        int gcd = getGcd(n, m);
        int lcm = n * m / gcd;

        answer[0] = gcd;
        answer[1] = lcm;

        return answer;
    }

    public int getGcd(int n, int m) {
        while (m != 0) {
            int r = n % m;

            n = m;
            m = r;
        }
        return n;
    }
}
