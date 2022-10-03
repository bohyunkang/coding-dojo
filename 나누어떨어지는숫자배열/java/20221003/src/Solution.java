import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Solution {
    public List<Integer> solution(int[] arr, int divisor) {
        List<Integer> answer;

        answer = sort(divide(arr, divisor));

        return answer;
    }

    public List<Integer> divide(int[] arr, int divisor) {
        List<Integer> array = new ArrayList<>();

        for (int i : arr) {
            if (i % divisor == 0) {
                array.add(i);
            }
        }

        if (array.size() == 0) {
            array.add(-1);
        }

        return array;
    }

    public List<Integer> sort(List<Integer> arr) {
        Collections.sort(arr);

        return arr;
    }
}
