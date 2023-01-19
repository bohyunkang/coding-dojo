import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void isOdd() {
        Solution solution = new Solution();

        assertTrue(solution.isOdd(3));
        assertFalse(solution.isOdd(8));
        assertTrue(solution.isOdd(15));
        assertFalse(solution.isOdd(20));
    }

    @Test
    void zigZagCase() {
        Solution solution = new Solution();

        assertEquals("TrY HeLlO WoRlD", solution.zigzagCase("try hello world"));
    }
}
