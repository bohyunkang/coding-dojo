import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {
    @Test
    void isOdd() {
        Solution solution = new Solution();

        assertTrue(solution.isOdd("abcde"));
    }

    @Test
    void isEven() {
        Solution solution = new Solution();

        assertFalse(solution.isOdd("qwer"));
    }

    @Test
    void str() {
        Solution solution = new Solution();

        assertEquals("c", solution.checkMiddleString("abcde"));
        assertEquals("we", solution.checkMiddleString("qwer"));
    }
}
