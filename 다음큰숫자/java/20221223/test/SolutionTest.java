import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void countOfOne() {
        Solution solution = new Solution();

        assertEquals(4,  solution.countOfOne(78));
        assertEquals(4,  solution.countOfOne(83));
    }

    @Test
    void isEqualOneCount() {
        Solution solution = new Solution();

        assertFalse(solution.isEqualCountOfOne(78, 79));
        assertTrue(solution.isEqualCountOfOne(78, 83));
    }

    @Test
    void solution() {
        Solution solution = new Solution();

        assertEquals(83, solution.solution(78));
    }
}
