import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;

class SolutionTest {

    @Test
    void split() {
        Solution solution = new Solution();

        assertArrayEquals(new int[]{1, 2, 3, 4}, solution.splitString("1 2 3 4"));
        assertArrayEquals(new int[]{-1, -2, -3, -4}, solution.splitString("-1 -2 -3 -4"));
        assertArrayEquals(new int[]{-1, -1}, solution.splitString("-1 -1"));
    }

    @Test
    void sort() {
        Solution solution = new Solution();

        assertArrayEquals(new int[]{1, 2, 3, 4}, solution.sort(new int[]{1, 2, 3, 4}));
        assertArrayEquals(new int[]{1, 2, 3, 4}, solution.sort(new int[]{4, 2, 3, 1}));
    }

    @Test
    void solution() {
        Solution solution = new Solution();

        assertEquals("1 4", solution.solution("1 2 3 4"));
        assertEquals("-4 -1", solution.solution("-1 -2 -3 -4"));
        assertEquals("-1 -1", solution.solution("-1 -1"));
    }
}
