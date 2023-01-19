import java.util.LinkedList;
import java.util.Queue;

public class Solution {
    public int solution(int cacheSize, String[] cities) {
        int runtime = 0;
        String[] citiesToLowerCase = toLowerCase(cities);
        Queue<String> queue = new LinkedList<>();

        for (String city : citiesToLowerCase) {
            if (cacheSize == 0) {
                runtime += 5;
                continue;
            }

            if (queue.size() > cacheSize) {
                queue.remove();
            }

            if (queue.contains(city)) {
                runtime += 1;
                queue.remove(city);
                queue.add(city);
            }

            if (!queue.contains(city)) {
                runtime += 5;
                queue.add(city);
            }
        }

        return runtime;
    }

    public String[] toLowerCase(String[] cities) {
        String[] array = new String[cities.length];

        for (int i = 0; i < cities.length; i += 1) {
            array[i] = cities[i].toLowerCase();
        }

        return array;
    }
}
