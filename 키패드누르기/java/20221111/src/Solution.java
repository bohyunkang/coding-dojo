public class Solution {
    public String solution(int[] numbers, String hand) {
        StringBuilder answer = new StringBuilder();
        int leftIndex = 10;
        int rightIndex = 12;

        for (int number : numbers) {
            if (number == 1 || number == 4 || number == 7) {
                leftIndex = getIndex(answer, number, "L");
                continue;
            }

            if (number == 3 || number == 6 || number == 9) {
                rightIndex = getIndex(answer, number, "R");
                continue;
            }

            int leftLength = getLength(leftIndex, number);
            int rightLength = getLength(rightIndex, number);

            if (leftLength > rightLength) {
                rightIndex = getIndex(answer, number, "R");
                continue;
            }

            if (leftLength < rightLength) {
                leftIndex = getIndex(answer, number, "L");
                continue;
            }

            if (hand.equals("right")) {
                rightIndex = getIndex(answer, number, "R");
                continue;
            }

            if (hand.equals("left")) {
                leftIndex = getIndex(answer, number, "L");
            }
        }

        return answer.toString();
    }

    public int getIndex(StringBuilder answer, int number, String direction) {
        answer.append(direction);
        return number;
    }

    public int getLength(int index, int number) {
        index = (index == 0) ? 11 : index;
        number = (number == 0) ? 11 : number;

        return Math.abs(index - number) / 3 + Math.abs(index - number) % 3;
    }
}
