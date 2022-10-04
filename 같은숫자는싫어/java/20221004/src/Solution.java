import java.util.*;

public class Solution {
    public int[] solution(int[] arr) {
        return removeRedundant(arr);
    }

    public int[] removeRedundant(int[] arr) {
        ArrayList<Integer> answers = new ArrayList<Integer>();

        int value = -1;
        for (int i = 0; i < arr.length; i += 1) {
            if (arr[i] != value) {
                answers.add(arr[i]);
                value = arr[i];
            }
        }

        return answers.stream().mapToInt(i -> i).toArray();
    }
}
