import java.util.Arrays;
import java.util.stream.Stream;

public class Solution {
    public String solution(String s) {
        int[] sortedArray = sort(splitString(s));

        String min = Integer.toString(sortedArray[0]);
        String max = Integer.toString(sortedArray[sortedArray.length - 1]);

        return "" + min + " " + max + "";
    }

    public int[] splitString(String s) {
        String[] array = s.split(" ");

        return Stream.of(array).mapToInt(Integer::parseInt).toArray();
    }

    public int[] sort(int[] s) {
        return Arrays.stream(s).sorted().toArray();
    }
}
