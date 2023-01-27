import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class SolutionTest {

    @Test
    void solution() {
        Solution solution = new Solution();

        assertEquals(5, solution.solution(new int[]{1, 1, 1, 1, 1}, 3));
        assertEquals(2, solution.solution(new int[]{4, 1, 2, 1}, 4));
    }
}
