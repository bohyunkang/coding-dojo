import java.util.*;

public class Solution {
    public ArrayList<Integer> solution(String msg) {
        ArrayList<Integer> answer = new ArrayList<>();
        HashMap<String, Integer> dictionary = new HashMap<>();

        int index = 26;

        initDictionary(dictionary);

        int size = msg.length();

        for (int i = 0; i < size; i += 1) {
            int a = 1;

            while (i + a <= size && dictionary.containsKey(msg.substring(i, i + a))) {
                a += 1;
            }

            if (i + a > size) {
                answer.add(dictionary.get(msg.substring(i)));

                break;
            }

            answer.add(dictionary.get(msg.substring(i, i + a - 1)));

            dictionary.put(msg.substring(i, i + a), index += 1);

            if (a > 1) {
                i += a - 2;
            }
        }

        return answer;
    }

    public void initDictionary(HashMap<String, Integer> dictionary) {
        char character = 'A';

        for (int i = 1; i < 27; i += 1) {
            dictionary.put(Character.toString(character), i);

            character += 1;
        }
    }
}
