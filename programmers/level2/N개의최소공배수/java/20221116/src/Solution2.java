import java.util.stream.IntStream;

public class Solution2 {
    public int solution(int[] arr) {
        return IntStream.range(0, arr.length)
                .reduce(arr[0], (acc, i) -> (acc = getLcm(acc, arr[i])));
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
