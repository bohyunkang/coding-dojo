import java.util.Arrays;

public class Solution {
    public int[] solution(int[] array, int[][] commands) {
        return getResult(array, commands);
    }

    public int sliceAndSort(int[] array, int[] command) {
        return Arrays.stream(array, command[0] - 1, command[1])
                .sorted()
                .toArray()[command[2] - 1];
    }

    public int[] getResult(int[] array, int[][] commands) {
        return Arrays.stream(commands)
                .mapToInt(command -> sliceAndSort(array, command))
                .toArray();
    }
}
