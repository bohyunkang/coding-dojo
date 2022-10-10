import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void getMax() {
        Solution solution = new Solution();

        assertEquals(4000, solution.getMax(new int[][]{{60, 50}, {30, 70}, {60, 30}, {80, 40}}));
        assertEquals(120, solution.getMax(new int[][]{{10, 7}, {12, 3}, {8, 15}, {14, 7}, {5, 15}}));
        assertEquals(133, solution.getMax(new int[][]{{14, 4}, {19, 6}, {6, 16}, {18, 7}, {7, 11}}));
    }
}
