import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void split() {
        Solution solution = new Solution();

        Integer[] numbers = {1, 2, 3};

        assertArrayEquals(numbers, solution.split(123));
    }

    @Test
    void sum() {
        Solution solution = new Solution();

        Integer[] numbers = {1, 2, 3};

        assertEquals(6, solution.sum(numbers));
    }
}
