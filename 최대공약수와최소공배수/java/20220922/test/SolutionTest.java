import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void gcd() {
        Solution solution = new Solution();

        assertEquals(3, solution.getGcd(3, 12));
        assertEquals(1, solution.getGcd(2, 5));
    }

    @Test
    void solution() {
        Solution solution = new Solution();

        assertEquals("[3, 12]", Arrays.toString(solution.solution(3, 12)));
        assertEquals("[1, 10]", Arrays.toString(solution.solution(2, 5)));
    }
}
