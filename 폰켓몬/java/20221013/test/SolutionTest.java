import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void answer() {
        Solution solution = new Solution();

        assertEquals(2, solution.solution(new int[]{3, 1, 2, 3}));
    }
}
