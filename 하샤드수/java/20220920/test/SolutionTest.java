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
        assertEquals(9, solution.add(solution.splitNumbers(18)));
    }

    @Test
    void isHarshadNumber() {
        Solution solution = new Solution();

        assertEquals(true, solution.isHarshadNumber(18, 9));
        assertEquals(true, solution.isHarshadNumber(18, solution.add(solution.splitNumbers(18))));
        assertEquals(true, solution.isHarshadNumber(10, solution.add(solution.splitNumbers(10))));
        assertEquals(true, solution.isHarshadNumber(12, solution.add(solution.splitNumbers(12))));
        assertEquals(false, solution.isHarshadNumber(11, solution.add(solution.splitNumbers(11))));
        assertEquals(false, solution.isHarshadNumber(13, solution.add(solution.splitNumbers(13))));
    }
}
