import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void zero() {
        Solution solution = new Solution();

        assertEquals(2, solution.processZero(new int[]{44, 1, 0, 0, 31, 25}));
        assertEquals(6, solution.processZero(new int[]{0, 0, 0, 0, 0, 0}));
        assertEquals(0, solution.processZero(new int[]{45, 4, 35, 20, 3, 9}));
    }

    @Test
    void compareNumbers() {
        Solution solution = new Solution();

        int[] lottos1 = {44, 1, 0, 0, 31, 25};
        int[] win_nums1 = {31, 10, 45, 1, 6, 19};
        assertEquals(2, solution.compareNumbers(lottos1, win_nums1));

        int[] lottos2 = {0, 0, 0, 0, 0, 0};
        int[] win_nums2 = {38, 19, 20, 40, 15, 25};
        assertEquals(0, solution.compareNumbers(lottos2, win_nums2));


        int[] lottos3 = {45, 4, 35, 20, 3, 9};
        int[] win_nums3 = {20, 9, 3, 45, 4, 35};
        assertEquals(6, solution.compareNumbers(lottos3, win_nums3));
    }

    @Test
    void result() {
        Solution solution = new Solution();

        assertArrayEquals(new int[]{3, 5}, solution.result(2, 2));
        assertArrayEquals(new int[]{1, 6}, solution.result(6, 0));
        assertArrayEquals(new int[]{1, 1}, solution.result(0, 6));
    }

    @Test
    void answer() {
        Solution solution = new Solution();

        int[] lottos1 = {44, 1, 0, 0, 31, 25};
        int[] win_nums1 = {31, 10, 45, 1, 6, 19};
        assertArrayEquals(new int[]{3, 5}, solution.solution(lottos1, win_nums1));

        int[] lottos2 = {0, 0, 0, 0, 0, 0};
        int[] win_nums2 = {38, 19, 20, 40, 15, 25};
        assertArrayEquals(new int[]{1, 6}, solution.solution(lottos2, win_nums2));

        int[] lottos3 = {45, 4, 35, 20, 3, 9};
        int[] win_nums3 = {20, 9, 3, 45, 4, 35};
        assertArrayEquals(new int[]{1, 1}, solution.solution(lottos3, win_nums3));
    }
}


//    int zero = 0;
//    int matched = 0;
//
//        for (int l : lottos) {
//                if (l == 0) zero++;
//                else {
//                for (int w : win_nums) {
//                if (l == w) {
//                matched++;
//                break;
//                }
//                }
//                }
//                }
//
//                int min = matched; // 2
//                int max = matched + zero; // 4
//
//                int[] answer = {Math.min(7 - max, 6), Math.min(7 - min, 6)};
//                return answer;
