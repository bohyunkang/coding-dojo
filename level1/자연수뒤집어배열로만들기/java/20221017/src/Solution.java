import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Solution {
    public List<Long> solution(long n) {
        return reverse(split(n));
    }

    public Long[] split(long n) {
        String number = String.valueOf(n);
        String[] numbers = number.split("");
        return Arrays.stream(numbers)
                .mapToLong(i -> Long.parseLong(i))
                .boxed()
                .toArray(Long[]::new);
    }

    public List<Long> reverse(Long[] numbers) {
        Collections.reverse(Arrays.asList(numbers));
        return Arrays.asList(numbers);
    }
}
