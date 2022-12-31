import java.util.Stack;

public class Solution {
    boolean solution(String s) {
        boolean answer = true;
        Stack<Character> stack = new Stack<>();

        for (char c : s.toCharArray()) {
            if (c == '(') {
                stack.push(c);
                continue;
            }

            if (c == ')') {
                if (stack.isEmpty()) {
                    answer = false;
                    break;
                }

                stack.pop();
            }
        }

        if (!stack.isEmpty()) {
            answer = false;
        }

        return answer;
    }
}
