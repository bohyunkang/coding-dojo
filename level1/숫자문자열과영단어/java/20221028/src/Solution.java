import java.util.Arrays;

public class Solution {
    String[] stringNumbers = {"zero", "one", "two",
            "three", "four", "five", "six",
            "seven", "eight", "nine"};

    public String[] index = {
            "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
    };

    public int solution(String s) {
        String answer = convertToStringNumber(s);

        return Integer.parseInt(answer);
    }

    public String convertToStringNumber(String s) {
        return Arrays.stream(index)
                .reduce(s, (acc, index) -> acc.replace(stringNumbers[Integer.parseInt(index)], index));
    }
}
