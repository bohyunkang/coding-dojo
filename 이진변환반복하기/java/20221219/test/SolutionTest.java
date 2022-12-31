import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void solution() {
        Solution solution = new Solution();

        assertArrayEquals(new int[]{3, 8}, solution.solution("110010101001"));
        assertArrayEquals(new int[]{3, 3}, solution.solution("01110"));
        assertArrayEquals(new int[]{4, 1}, solution.solution("1111111"));
    }
}
