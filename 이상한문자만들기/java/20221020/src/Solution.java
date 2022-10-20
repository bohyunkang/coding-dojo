public class Solution {
    public String solution(String s) {
        return zigzagCase(s);
    }

    public boolean isOdd(int index) {
        return index % 2 == 1;
    }

    public String zigzagCase(String s) {
        StringBuilder answer = new StringBuilder();
        int count = 0;
        String[] array = s.split("");

        for (String value : array) {
            count = value.contains(" ") ? 0 : count + 1;
            answer.append(isOdd(count) ? value.toUpperCase() : value.toLowerCase());
        }

        return answer.toString();
    }
}
