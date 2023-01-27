import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void solution() {
        Solution solution = new Solution();

        assertEquals(3, solution.solution(new int[]{70, 50, 80, 50}, 100));
        assertEquals(3, solution.solution(new int[]{70, 80, 50}, 100));
    }
}
