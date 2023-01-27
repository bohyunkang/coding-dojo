import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

//    @Test
//    void split() {
//        Solution solution = new Solution();
//
//        assertArrayEquals(new String[]{"for", "brand", "new"}, solution.splitString("for brand new"));
//        assertArrayEquals(new String[]{"7good", "vibes", "only"}, solution.splitString("7good vibes only"));
//    }
//
//    @Test
//    void isNumber() {
//        Solution solution = new Solution();
//
//        assertFalse(solution.isNumber("for"));
//        assertTrue(solution.isNumber("7good"));
//    }
//
//    @Test
//    void replace() {
//        Solution solution = new Solution();
//
//        assertEquals("For", solution.replace("for"));
//    }

    @Test
    void solution() {
        Solution solution = new Solution();

        assertEquals("For Brand New", solution.solution("for brand new"));
        assertEquals("7good Vibes Only", solution.solution("7good vibes only"));
        assertEquals("3people Unfollowed Me ", solution.solution("3people unFollowed me "));
    }
}
