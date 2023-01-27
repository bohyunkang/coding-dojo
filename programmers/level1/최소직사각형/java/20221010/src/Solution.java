import java.util.Arrays;

public class Solution {
    public int solution(int[][] sizes) {
        return getMin(sort(sizes));
    }

    public int[][] sort(int[][] sizes) {
        return Arrays.stream(sizes)
                .map(size -> Arrays.stream(size).sorted().toArray())
                .toArray(int[][]::new);
    }

    public int getMin(int[][] sortedSizes) {
        int horizontalMax = 0;
        int verticalMax = 0;

        for (int[] size : sortedSizes) {
            if (size[0] > horizontalMax) {
                horizontalMax = size[0];
            }

            if (size[1] > verticalMax) {
                verticalMax = size[1];
            }
        }

        return horizontalMax * verticalMax;
    }
}
