class Solution {
    public String solution(int num) {
        String answer = "";
        String ODD = "Odd";
        String EVEN = "Even";

        if (num % 2 == 0) {
            answer = EVEN;
        }

        if (num % 2 == 1) {
            answer = ODD;
        }

        return answer;
    }
}
