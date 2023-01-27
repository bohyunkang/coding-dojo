import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {
    @Test
    void isEven() {
        Solution solution = new Solution();

        assertTrue(solution.isEven(4));
        assertFalse(solution.isEven(3));
    }

    @Test
    void answer() {
        Solution solution = new Solution();

        assertEquals("수", solution.solution(1));
        assertEquals("수박", solution.solution(2));
        assertEquals("수박수", solution.solution(3));
        assertEquals("수박수박", solution.solution(4));
    }
}
