public class Solution {
    public boolean solution(int x) {
        int addNumbers = add(splitNumbers(x));

        return isHarshadNumber(x, addNumbers);
    }

    public int[] splitNumbers(int x) {
        String number = String.valueOf(x);

        String[] digits = number.split("");

        int[] numbers = new int[digits.length];

        for (int i = 0; i < digits.length; i += 1) {
            numbers[i] = Integer.parseInt(digits[i]);
        }

        return numbers;
    }

    public int add(int[] x) {
        int answer = 0;

        for (int i : x) {
            answer += i;
        }

        return answer;
    }

    public boolean isHarshadNumber(int x, int addNumbers) {
        return x % addNumbers == 0;
    }
}
