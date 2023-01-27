import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void converter() {
        Solution solution = new Solution();

        assertEquals("1478", solution.convertToStringNumber("one4seveneight"));
    }

    @Test
    void solution() {
        Solution solution = new Solution();

        assertEquals(1478, solution.solution("one4seveneight"));
    }
}
