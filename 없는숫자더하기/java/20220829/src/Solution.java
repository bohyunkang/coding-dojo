import java.util.Arrays;

class Solution {
    public int solution(int[] numbers) {
        int answer = 0;

        for (int i = 0; i <= 9; i += 1) {
            if (!contains(numbers, i)) {
                answer += i;
            }
        }

        return answer;
    }


    public static boolean contains(int[] arr, int key) {
        return Arrays.stream(arr).anyMatch(i -> i == key);
    }
}
