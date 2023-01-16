import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void getWays() {
        Solution solution = new Solution();

        assertEquals(5, solution.getWays(4));
    }

    @Test
    void solution() {
        Solution solution = new Solution();

        assertEquals(5, solution.solution(4));
    }
}
