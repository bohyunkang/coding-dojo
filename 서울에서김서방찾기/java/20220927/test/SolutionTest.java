import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void findIndex() {
        Solution solution = new Solution();

        assertEquals(1, solution.getIndex(new String[]{"Jane", "Kim"}));
        assertEquals(0, solution.getIndex(new String[]{"Kim", "Boni", "Hani"}));
    }

    @Test
    void displayResult() {
        Solution solution = new Solution();

        assertEquals("김서방은 1에 있다", solution.displayResult(1));
        assertEquals("김서방은 3에 있다", solution.displayResult(3));
    }
}
