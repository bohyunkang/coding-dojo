import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void sliceAndSort() {
        Solution solution = new Solution();

        int[] array = {1, 5, 2, 6, 3, 7, 4};
        int[][] command = {{2, 5, 3},{4, 4, 1},{1, 7, 3}};

        assertEquals(5, solution.withApi(array, command[0]));
        assertEquals(6, solution.withApi(array, command[1]));
        assertEquals(3, solution.withApi(array, command[2]));
    }


    @Test
    void command() {
        Solution solution = new Solution();

        int[] array = {1, 5, 2, 6, 3, 7, 4};
        int[][] commands = {{2, 5, 3},{4, 4, 1},{1, 7, 3}};

        assertArrayEquals(new int[]{5, 6, 3}, solution.getResult(array, commands));
    }
}
