import java.util.stream.IntStream;

public class Solution {
    public int solution(int n) {
        return computeRemainder(n);
    }

    public int computeRemainder(int n) {
        return IntStream.range(1, n)
                .filter(i -> n % i == 1).findFirst().getAsInt();
    }
}
