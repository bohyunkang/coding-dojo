import java.util.Arrays;
import java.util.Collections;

public class Solution {
    public String solution(String s) {
        String answer = "";

        String[] splitString = splitString(s);

        int[] ascii = convertToASCII(splitString);

        char[] convertToChar = convertToChar(sort(ascii));

        answer = getResultString(convertToChar);

        return answer;
    }

    public String[] splitString(String s) {
        String[] array = s.split("");

        return array;
    }

    public int[] convertToASCII(String[] s) {
        int[] array = new int[s.length];

        for (int i = 0; i < s.length; i += 1) {
            char ch = s[i].charAt(0);
            array[i] = (int) ch;
        }

        return array;
    }

    public Integer[] sort(int[] s) {
        Integer[] array = Arrays.stream(s).boxed().toArray(Integer[]::new);
        Arrays.sort(array, Collections.reverseOrder());

        return array;
    }

    public char[] convertToChar(Integer[] s) {
        char[] array = new char[s.length];

        for (int i = 0; i < s.length; i += 1) {
            int num = s[i];
            char ch = (char) num;
            array[i] = ch;
        }

        return array;
    }

    public String getResultString(char[] s) {
        String result = "";

        for (int i = 0; i < s.length; i += 1) {
            result += s[i];
        }

        return result;
    }
}
