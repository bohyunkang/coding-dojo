public class Solution {
    public String solution(String s, int n) {
        return s.chars().map(ch -> caesar(ch, n))
                .mapToObj(ch -> String.valueOf((char) ch))
                .reduce((a, b) -> a + b).orElse("");
    }

    public int caesar(int ch, int n) {
        if (ch >= 'a' && ch <= 'z') {
            return 'a' + (ch - 'a' + n) % 26;
        }

        if (ch >= 'A' && ch <= 'Z') {
            return 'A' + (ch - 'A' + n) % 26;
        }

        return ch;
    }
}
