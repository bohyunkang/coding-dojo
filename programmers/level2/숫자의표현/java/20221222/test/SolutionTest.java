import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void expression() {
        Solution solution = new Solution();

        assertTrue(solution.expression(1, 15));
    }

    @Test
    void solution() {
        Solution solution = new Solution();

        assertEquals(4, solution.solution(15));
    }
}
