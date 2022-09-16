import java.util.ArrayList;

public class Solution {
    public int solution(int n) {
        return isDecimal(isConvertedTernary(n));
    }

    public String isConvertedTernary(int n) {
        ArrayList<Integer> array = new ArrayList<>();

        while (n > 0) {
            array.add(n % 3);
            n /= 3;
        }

        String convertedTernary = "";

        for(int i = 0; i < array.size(); i += 1) {
            convertedTernary += array.get(i);
        }

        return convertedTernary;
    }

    public int isDecimal(String n) {
        return Integer.parseInt(n, 3);
    }
}
