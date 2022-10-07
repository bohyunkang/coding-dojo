import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void convertToBinary() {
        Solution solution = new Solution();

        assertArrayEquals(new String[]{"11111", "10101", "11101", "10011", "11111"},
                solution.convertToBinary(5, new int[]{9, 20, 28, 18, 11}, new int[]{30, 1, 21, 17, 28}));
    }

    @Test
    void decodeSecretMap() {
        Solution solution = new Solution();

        assertArrayEquals(new String[]{"#####","# # #", "### #", "#  ##", "#####"},
                solution.decodeSecretMap(5, new String[]{"11111", "10101", "11101", "10011", "11111"}));
    }
}
