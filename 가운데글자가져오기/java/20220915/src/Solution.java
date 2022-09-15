public class Solution {
    public String solution(String s) {
        String answer = "";

        answer = checkMiddleString(s);

        return answer;
    }

    public String checkMiddleString(String s) {
        int middle = s.length() / 2;

        if (isOdd(s)) {
            return s.substring(middle, middle + 1);
        }

        return s.substring(middle - 1, middle + 1);
    }

    public boolean isOdd(String s) {
        return s.length() % 2 == 1;
    }
}
