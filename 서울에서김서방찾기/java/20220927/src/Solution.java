public class Solution {
    public String solution(String[] seoul) {
        String answer = "";

        int index = getIndex(seoul);

        answer = displayResult(index);

        return answer;
    }

    public int getIndex(String[] seoul) {
        int index = 0;

        for (int i = 0; i < seoul.length; i += 1) {
            if (seoul[i].equals("Kim")) {
                index = i;
            }
        }

        return index;
    }

    public String displayResult(int index) {
        return "김서방은 " + index + "에 있다";
    }
}
