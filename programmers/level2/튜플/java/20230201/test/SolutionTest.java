import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void solution() {
        Solution solution = new Solution();

        assertArrayEquals(new int[]{2, 1, 3, 4}, solution.solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
    }

    @Test
    void tuple() {
        Solution solution = new Solution();

        assertArrayEquals(new int[]{2, 1, 3, 4}, solution.tuple("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
    }
}
