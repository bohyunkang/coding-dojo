import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    // TODO: toString으로 통과했던 테스트 코드 수정 필요
    @Test
    void split() {
        Solution solution = new Solution();

        assertEquals("[a, b, c]", solution.splitString("abc"));
    }

    @Test
    void convertToASCII() {
        Solution solution = new Solution();

        assertEquals("[97, 98, 99]", solution.convertToASCII(new String[]{"a", "b", "c"}));
    }

    @Test
    void sort() {
        Solution solution = new Solution();

        assertEquals("[99, 98, 97]", solution.sort(new int[]{97, 98, 99}));
    }

    @Test
    void convertToChar() {
        Solution solution = new Solution();

        assertEquals("[c, b, a]", solution.convertToChar(new Integer[]{99, 98, 97}));
    }

    @Test
    void getResultString() {
        Solution solution = new Solution();

        assertEquals("cba", solution.getResultString(new char[]{'c', 'b', 'a'}));
    }
}
