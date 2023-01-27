import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void isConvertedTernary() {
        Solution solution = new Solution();

        assertEquals("0021", solution.isConvertedTernary(45));
        assertEquals("22111", solution.isConvertedTernary(125));
    }

    @Test
    void isDecimal() {
        Solution solution = new Solution();

        assertEquals(7, solution.isDecimal("0021"));
        assertEquals(229, solution.isDecimal("22111"));
    }
}
