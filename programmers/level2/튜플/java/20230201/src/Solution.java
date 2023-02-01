import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

public class Solution {
    public int[] solution(String s) {
        int[] answer = tuple(s);

        return answer;
    }

    public int[] tuple(String s) {
        Set<String> tupleSet = new LinkedHashSet<>();
        String[] tuple = s.substring(1, s.length() - 1).split("},");

        for (int i = 0; i < tuple.length; i += 1) {
            tuple[i] = tuple[i].replace("{", "");
            tuple[i] = tuple[i].replace("}", "");
        }

        Arrays.sort(tuple, (a, b) -> (a.length() - b.length()));

        for (String value : tuple) {
            String[] array = value.split(",");

            tupleSet.addAll(Arrays.asList(array));
        }

        int[] answer = new int[tupleSet.size()];
        int index = 0;

        for (String value : tupleSet) {
            answer[index] = Integer.parseInt(value);
            index += 1;
        }

        return answer;
    }
}
