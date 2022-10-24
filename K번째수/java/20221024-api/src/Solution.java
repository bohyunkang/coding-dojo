import java.util.Arrays;

public class Solution {
    public int[] solution(int[] array, int[][] commands) {
        return getResult(array, commands);
    }

    // with Api
    public int withApi(int[] array, int[] command) {
        return Arrays.stream(Arrays.copyOfRange(array, command[0] - 1, command[1]))
                .sorted()
                .toArray()[command[2] - 1];
    }

    public int[] getResult(int[] array, int[][] commands) {
        return Arrays.stream(commands)
                .mapToInt(command -> withApi(array, command))
                .toArray();
    }
}
