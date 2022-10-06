import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void remainder() {
        Solution solution = new Solution();

        assertEquals(3, solution.computeRemainder(10));
    }
}
