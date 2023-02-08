import java.util.HashMap;
import java.util.Iterator;

class Solution {
    public int solution(String[][] clothes) {
        HashMap<String, Integer> map = new HashMap<>();

        for (String[] item : clothes) {
            String type = item[1];
            map.put(type, map.getOrDefault(type, 0) + 1);
        }

        Iterator<Integer> iterator = map.values().iterator();

        int answer = 1;

        while(iterator.hasNext()) {
            answer *= iterator.next() + 1;
        }

        return answer - 1;
    }
}
