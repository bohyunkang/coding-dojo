import java.util.Stack;

public class Solution {
    public int solution(String s) {
        return rotate(s, 0, 1);
    }

    public int rotate(String s, int answer, int cycle) {
        if (cycle == s.length()) {
            return answer;
        }

        Stack<Character> stack = new Stack<>();

        for (int i = 0; i < s.length(); i += 1) {
            char c = s.charAt(i);

            if (stack.empty()) {
                stack.push(c);
                continue;
            }
            if (c == ')' && stack.peek() == '(') {
                stack.pop();
                continue;
            }
            if (c == '}' && stack.peek() == '{') {
                stack.pop();
                continue;
            }
            if (c == ']' && stack.peek() == '[') {
                stack.pop();
                continue;
            }
            stack.push(c);
        }

        String nextString = s.substring(1) + s.charAt(0);

        if (stack.isEmpty()) {
            return rotate(nextString, answer + 1, cycle + 1);
        }

        return rotate(nextString, answer, cycle + 1);
    }
}
