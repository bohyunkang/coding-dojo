public class Solution {
    public int solution(int[] arr) {
        int answer = arr[0];

        for (int i = 0; i < arr.length; i += 1) {
            answer = getLcm(answer, arr[i]);
        }

        return answer;
    }

    public int getLcm(int n, int m) {
        int gcd = getGcd(n, m);
        int lcm = n * m / gcd;

        return lcm;
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
