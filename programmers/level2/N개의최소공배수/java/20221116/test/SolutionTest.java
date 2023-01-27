import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void gcd() {
        Solution solution = new Solution();

        assertEquals(3, solution.getGcd(3, 12));
        assertEquals(1, solution.getGcd(2, 5));
    }

    @Test
    void lcm() {
        Solution solution = new Solution();

        assertEquals(12, solution.getLcm(3, 12));
        assertEquals(10, solution.getLcm(2, 5));
    }

    @Test
    void solution() {
        Solution solution = new Solution();

        assertEquals(168, solution.solution(new int[]{2, 6, 8, 14}));
        assertEquals(6, solution.solution(new int[]{1, 2, 3}));
    }
}
