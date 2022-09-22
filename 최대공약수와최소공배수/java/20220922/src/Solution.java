class Solution {
    private int[] answer;

    public int[] solution(int n, int m) {
        answer = new int[2];

        int gcd = getGcd(n, m);

        answer[0] = gcd;
        answer[1] = n * m / gcd;

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
