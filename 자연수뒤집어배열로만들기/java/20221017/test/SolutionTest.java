import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void split() {
        Solution solution = new Solution();
        long one = 1;
        long two = 2;
        long three = 3;
        long four = 4;
        long five = 5;

        assertArrayEquals(new Long[]{one, two, three, four, five}, solution.split(12345));
    }

    @Test
    void reverse() {
        Solution solution = new Solution();
        long one = 1;
        long two = 2;
        long three = 3;
        long four = 4;
        long five = 5;

        List<Long> reversedNumber = List.of(five, four, three, two, one);

        assertEquals(reversedNumber, solution.reverse(solution.split(12345)));
    }
}
