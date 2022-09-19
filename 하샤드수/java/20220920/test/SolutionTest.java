import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {
    @Test
    void split() {
        Solution solution = new Solution();

        assertArrayEquals(new int[]{1, 8}, solution.splitNumbers(18));
    }

    @Test
    void plus() {
        Solution solution = new Solution();

        assertEquals(9, solution.add(new int[]{1, 8}));
    }

    @Test
    void isHarshadNumber() {
        Solution solution = new Solution();

        assertEquals(true, solution.isHarshadNumber(18, 9));
    }
}
