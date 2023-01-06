import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertEquals;

class SolutionTest {

    @Test
    void solution() {
        Solution solution = new Solution();

        assertEquals(Arrays.asList(11, 1, 27, 15), solution.solution("KAKAO"));
        assertEquals(Arrays.asList(20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34),
                solution.solution("TOBEORNOTTOBEORTOBEORNOT"));
        assertEquals(Arrays.asList(1, 2, 27, 29, 28, 31, 30), solution.solution("ABABABABABABABAB"));
    }
}
