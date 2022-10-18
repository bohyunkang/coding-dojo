import java.util.Arrays;

public class Solution {
    public int solution(int n) {
        return sum(split(n));
    }

    public Integer[] split(int n) {
        String number = String.valueOf(n);
        String[] array = number.split("");

        return Arrays.stream(array)
                .mapToInt(i -> Integer.parseInt(i))
                .boxed()
                .toArray(Integer[]::new);
    }

    public int sum(Integer[] numbers) {
        return Arrays.stream(numbers).mapToInt(i -> i).sum();
    }
}
