import java.util.ArrayList;
import java.util.List;

public class Solution {
    public int[] solution(int n, String[] words) {
        int[] answer = new int[2];
        List<String> list = new ArrayList<>();

        for (int i = 0; i < words.length; i += 1) {
            if (list.contains(words[i]) ||
                    (i > 0 && words[i].charAt(0) != words[i - 1].charAt(words[i - 1].length() - 1))) {
                answer[0] = (i % n) + 1;
                answer[1] = (i / n) + 1;

                return answer;
            }

            list.add(words[i]);
        }

        return answer;
    }
}
