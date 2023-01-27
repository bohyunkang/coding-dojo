import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void solution1() {
        Solution solution = new Solution();
        int n = 3;
        String[] words = {"tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"};
        int[] result = {3, 3};

        assertArrayEquals(result, solution.solution(n, words));
    }

    @Test
    void solution2() {
        Solution solution = new Solution();
        int n = 5;
        String[] words = {"hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure",
                "establish", "hang", "gather", "refer", "reference", "estimate", "executive"};
        int[] result = {0, 0};

        assertArrayEquals(result, solution.solution(n, words));
    }

    @Test
    void solution3() {
        Solution solution = new Solution();
        int n = 2;
        String[] words = {"hello", "one", "even", "never", "now", "world", "draw"};
        int[] result = {1, 3};

        assertArrayEquals(result, solution.solution(n, words));
    }

}
