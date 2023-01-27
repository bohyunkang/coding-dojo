import java.util.Arrays;
import java.util.Comparator;

public class Solution {
    public long solution(long n) {
        String[] sortedNumbers = sort(split(n));
        return joinToLong(sortedNumbers);
    }

    public String[] split(long n) {
        String number = String.valueOf(n);

        return number.split("");
    }

    public String[] sort(String[] numbers) {
        return Arrays.stream(numbers)
                .sorted(Comparator.reverseOrder())
                .toArray(String[]::new);
    }

    public long joinToLong(String[] sortedNumbers) {
        String joinedNumbers = String.join("", sortedNumbers);
        return Long.parseLong(joinedNumbers);
    }
}
