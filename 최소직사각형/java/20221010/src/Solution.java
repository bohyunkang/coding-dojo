public class Solution {
    public int solution(int[][] sizes) {
        return getMax(sizes);
    }

    public int getMax(int[][] sizes) {
        int horizontalMax = 0;
        int verticalMax = 0;

        for (int[] size : sizes) {
            int horizontal = Math.max(size[0], size[1]);
            int vertical = Math.min(size[0], size[1]);

            horizontalMax = Math.max(horizontalMax, horizontal);
            verticalMax = Math.max(verticalMax, vertical);
        }

        return horizontalMax * verticalMax;
    }
}
