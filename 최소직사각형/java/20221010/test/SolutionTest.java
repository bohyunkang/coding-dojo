import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void sort() {
        Solution solution = new Solution();

        assertArrayEquals(new int[][]{{50, 60}, {30, 70}, {30, 60}, {40, 80}},
                solution.sort(new int[][]{{60, 50}, {30, 70}, {60, 30}, {80, 40}}));
    }

    @Test
    void getMinimum() {
        Solution solution = new Solution();

        assertEquals(4000, solution.getMin(new int[][]{{50, 60}, {30, 70}, {30, 60}, {40, 80}}));
    }
}
