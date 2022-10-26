import java.util.HashSet;

public class Solution {
    public int solution(int[] nums) {
        int max = nums.length / 2;

        HashSet<Integer> numsSet = new HashSet<>();

        for (int num : nums) {
            numsSet.add(num);
        }

        return Math.min(numsSet.size(), max);
    }
}
