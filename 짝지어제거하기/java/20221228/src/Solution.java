import java.util.Objects;
import java.util.Stack;

public class Solution {
    public int solution(String s) {
        String[] words = s.split("");
        Stack<String> stack = new Stack<>();

        for (String word : words) {
            if (stack.isEmpty()) {
                stack.push(word);
                continue;
            }

            if (Objects.equals(stack.peek(), word)) {
                stack.pop();
                continue;
            }

            stack.push(word);
        }

        if (stack.isEmpty()) {
            return 1;
        }

        return 0;
    }
}
