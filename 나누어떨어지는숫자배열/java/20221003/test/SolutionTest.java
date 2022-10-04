import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    // toString으로 확인했던 테스트 코드
    // 테스트 코드까지 통과하면서 확인해볼 수 있는 방법은 없을까?
    @Test
    void divide() {
        Solution solution = new Solution();

        assertEquals("[5, 10]", solution.divide(new int[]{5, 9, 7, 10}, 5));
    }

    @Test
    void sort() {
        Solution solution = new Solution();
        List<Integer> array = new ArrayList<>();

        array.add(5);
        array.add(10);

        assertEquals("[5, 10]", solution.sort(array));
    }

    @Test
    void isEmpty() {
        Solution solution = new Solution();

        assertEquals("[-1]", solution.divide(new int[]{3, 2, 6}, 10));
    }


}
