import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void caesar() {
        Solution solution = new Solution();

        assertEquals("BC", solution.solution("AB", 1));
        assertEquals("a", solution.solution("z", 1));
        assertEquals("e F d", solution.solution("a B z", 4));
    }
}
