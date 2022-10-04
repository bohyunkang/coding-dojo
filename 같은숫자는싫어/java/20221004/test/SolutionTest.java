import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void redundant() {
        Solution solution = new Solution();

        assertArrayEquals(new int[]{1, 3, 0, 1}, solution.removeRedundant(new int[]{1, 1, 3, 3, 0, 1, 1}));
    }
}
