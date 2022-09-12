class Solution {
    boolean solution(String s) {
        boolean answer = true;

        String[] sToArray = s.toLowerCase().split("");

        if (sToArray.length > 0 || sToArray.length <= 50) {
            int p = 0;
            int y = 0;

            for (int i = 0; i < sToArray.length; i += 1) {
                if (!(sToArray[i].equals("p") || sToArray[i].equals("y"))) {
                    continue;
                }

                if (sToArray[i].equals("p")) {
                    p += 1;
                }

                if (sToArray[i].equals("y")) {
                    y += 1;
                }
            }

            if (p == y) {
                answer = true;
            }

            if (p != y) {
                answer = false;
            }
        }

        return answer;
    }
}
