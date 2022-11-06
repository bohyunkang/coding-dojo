import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void getResult() {
        Solution solution = new Solution();

        int[][] board1 = {{0, 0, 0, 0, 0}, {0, 0, 1, 0, 3}, {0, 2, 5, 0, 1}, {4, 2, 4, 4, 2}, {3, 5, 1, 3, 1}};
        int[] moves1 = {1, 5, 3, 5, 1, 2, 1, 4};

        int[][] board2 = {{0, 0, 0, 0, 0}, {0, 0, 1, 0, 3}, {0, 2, 5, 0, 1}, {4, 2, 4, 4, 2}, {3, 5, 1, 3, 1}};
        int[] moves2 = {1, 5, 3, 5, 1, 2, 1, 4};

        int[][] board3 = {{0, 0, 0, 0, 0}, {0, 0, 1, 0, 3}, {0, 2, 5, 0, 1}, {4, 2, 4, 4, 2}, {3, 5, 1, 3, 1}};
        int[] moves3 = {1, 5, 3, 5, 1, 2, 1, 4};

        assertEquals(4, solution.solution(board1, moves1));
    }
}
