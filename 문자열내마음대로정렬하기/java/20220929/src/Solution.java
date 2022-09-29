import java.util.ArrayList;
import java.util.Collections;

public class Solution {
    public String[] solution(String[] strings, int n) {
        String[] answer = {};

        ArrayList<String> array = new ArrayList<>();

        for (int i = 0; i < strings.length; i += 1) {
            array.add("" + strings[i].charAt(n) + strings[i]);
        }

        Collections.sort(array);

        answer = new String[array.size()];

        for (int i = 0; i < array.size(); i += 1) {
            answer[i] = array.get(i).substring(1, array.get(i).length());
        }
        
        return answer;
    }
}
