import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void totalPrice() {
        Solution solution = new Solution();

        assertEquals(30, solution.computeTotalPrice(3, 4));
    }

    @Test
    void checkMoney() {
        Solution solution = new Solution();

        assertEquals(10, solution.checkMoney(20, 30));
    }

    @Test
    void enoughMoney() {
        Solution solution = new Solution();

        assertEquals(0, solution.checkMoney(40, 30));
        assertEquals(0, solution.checkMoney(30, 30));
    }
}
