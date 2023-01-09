import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class SolutionTest {

    @Test
    void splitWordsAndToLowerCase() {
        Solution solution = new Solution();
        List<String> array1 = Arrays.asList("fr", "ra", "an", "nc", "ce");
        List<String> array2 = Arrays.asList("fr", "re", "en", "nc", "ch");

        assertEquals(array1, solution.splitWords("FRANCE"));
        assertEquals(array2, solution.splitWords("french"));
    }

    @Test
    void onlyEnglishLetter() {
        Solution solution = new Solution();
        List<String> array = Arrays.asList("aa", "aa");

        assertEquals(array, solution.splitWords("aa1+aa2"));
    }

    @Test
    void jaccardSimilarity() {
        Solution solution = new Solution();

        assertEquals(0.25, solution.jaccardSimilarity(2, 8));
    }

    @Test
    void solution() {
        Solution solution = new Solution();

        assertEquals(16384, solution.solution("FRANCE", "french"));
        assertEquals(65536, solution.solution("handshake", "shake hands"));
        assertEquals(43690, solution.solution("aa1+aa2", "AAAA12"));
        assertEquals(65536, solution.solution("E=M*C^2", "e=m*c^2"));
    }
}
