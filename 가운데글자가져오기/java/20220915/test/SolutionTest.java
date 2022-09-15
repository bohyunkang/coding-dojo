import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {
    @Test
    void isOdd() {
        Solution solution = new Solution();

        assertTrue(solution.isOdd("abcde"));
        assertFalse(solution.isOdd("qwer"));
    }

    @Test
    void middleString() {
        Solution solution = new Solution();

        assertEquals("c", solution.getMiddleString("abcde"));
        assertEquals("we", solution.getMiddleString("qwer"));
    }
}
