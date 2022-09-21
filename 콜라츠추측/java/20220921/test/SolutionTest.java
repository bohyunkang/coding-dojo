import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void isEven() {
        Solution solution = new Solution();

        assertTrue(solution.isEven(2));
        assertFalse(solution.isEven(3));
    }

    @Test
    void compute() {
        Solution solution = new Solution();

        assertEquals(3, solution.compute(6));
        assertEquals(22, solution.compute(7));
    }

    @Test
    void solution() {
        Solution solution = new Solution();

        assertEquals(0, solution.solution(1));
        assertEquals(8, solution.solution(6));
        assertEquals(-1, solution.solution(626331));
    }
}
