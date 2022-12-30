import java.util.ArrayList;
import java.util.List;

public class Solution {
    public int solution(String str1, String str2) {
        int answer;

        List<String> string1 = splitWords(str1);
        List<String> string2 = splitWords(str2);

        List<String> intersection = new ArrayList<>();
        List<String> union = new ArrayList<>();

        for (String value : string1) {
            if (string2.remove(value)) {
                intersection.add(value);
            }

            union.add(value);
        }

        union.addAll(string2);

        if (union.isEmpty()) {
            return 65536;
        }

        double jaccardIndex = jaccardSimilarity(intersection.size(), union.size());

        double temp = jaccardIndex * 65536;

        answer = (int) temp;

        return answer;
    }

    public List<String> splitWords(String string) {
        String word = string.toLowerCase();
        List<String> words = new ArrayList<>();

        for (int i = 0; i < word.length() - 1; i += 1) {
            char a = word.charAt(i);
            char b = word.charAt(i + 1);

            if((a >= 'a' && a <= 'z') && (b >= 'a' && b <= 'z')) {
                words.add(String.valueOf(a) + String.valueOf(b));
            }
        }

        return words;
    }

    public double jaccardSimilarity(double a, double b) {
        return a / b;
    }
}
