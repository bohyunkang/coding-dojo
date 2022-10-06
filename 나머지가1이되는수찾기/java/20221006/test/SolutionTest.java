import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void remainder() {
        Solution solution = new Solution();

        assertEquals(3, solution.computeRemainder(10));
    }

    @Test
    void stream() {
        Solution solution = new Solution();

        assertEquals(3, solution.computeRemainder(10));
        assertEquals(11, solution.computeRemainder(12));
    }
}
