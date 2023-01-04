import java.util.Arrays;

public class Solution {
    public int solution(int[] people, int limit) {
        int answer = 0;

        int[] sortedArray = Arrays.stream(people).sorted().toArray();

        int min = 0;
        int max = sortedArray.length - 1;

        while (max >= min) {
            if (sortedArray[min] + sortedArray[max] <= limit) {
                min += 1;
            }

            max -= 1;
            answer += 1;
        }

        return answer;
    }
}
