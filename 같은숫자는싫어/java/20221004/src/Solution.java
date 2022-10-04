import java.util.*;

public class Solution {
    public int[] solution(int[] arr) {
        return removeRedundant(arr);
    }

    public int[] removeRedundant(int[] arr) {
        ArrayList<Integer> answers = new ArrayList<Integer>();

        int value = -1;
        for (int i : arr) {
            if (i != value) {
                answers.add(i);
                value = i;
            }
        }

        return answers.stream().mapToInt(i -> i).toArray();
    }
}
