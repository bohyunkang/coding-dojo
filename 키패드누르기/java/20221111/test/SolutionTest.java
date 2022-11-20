import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class SolutionTest {

    @Test
    void result() {
        Solution solution = new Solution();

        assertEquals("LRLLLRLLRRL", solution.solution(new int[]{1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5}, "right"));
        assertEquals("LRLLRRLLLRR", solution.solution(new int[]{7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2}, "left"));
        assertEquals("LLRLLRLLRL", solution.solution(new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 0}, "right"));
    }
}
