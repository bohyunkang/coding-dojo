import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void solution1() {
        Solution solution = new Solution();

        int[][] arr1 = {{1, 4}, {3, 2}, {4, 1}};
        int[][] arr2 = {{3, 3}, {3, 3}};

        assertArrayEquals(new int[][]{{15, 15}, {15, 15}, {15, 15}}, solution.solution(arr1, arr2));
    }

    @Test
    void solution2() {
        Solution solution = new Solution();

        int[][] arr1 = {{2, 3, 2}, {4, 2, 4}, {3, 1, 4}};
        int[][] arr2 = {{5, 4, 3}, {2, 4, 1}, {3, 1, 1}};

        assertArrayEquals(new int[][]{{22, 22, 11}, {36, 28, 18}, {29, 20, 14}}, solution.solution(arr1, arr2));
    }
}
