import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void split() {
        Solution solution = new Solution();

        String[] numbers = {"1", "1", "8", "3", "7", "2"};

        assertArrayEquals(numbers, solution.split(118372));
    }

    @Test
    void sort() {
        Solution solution = new Solution();

        String[] numbers = {"1", "1", "8", "3", "7", "2"};
        String[] sortedNumbers = {"8", "7", "3", "2", "1", "1"};

        assertArrayEquals(sortedNumbers, solution.sort(numbers));
    }

    @Test
    void join() {
        Solution solution = new Solution();

        String[] sortedNumbers = {"8", "7", "3", "2", "1", "1"};

        assertEquals(873211, solution.joinToLong(sortedNumbers));
    }

}
