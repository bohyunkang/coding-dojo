import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.stream.IntStream;
import java.util.stream.Collectors;

public class Solution {
    public int[] solution(String[] id_list, String[] report, int k) {
        int[] answer = getAnswer(id_list, report, k);

        return answer;
    }

    public int[] getAnswer(String[] id_list, String[] report, int k) {
        int[] answer = new int[id_list.length];

        Map<String, HashSet<String>> reportMap = new HashMap<>();
        Map<String, Integer> answerMap = new HashMap<>();

        setUpMaps(id_list, reportMap, answerMap);

        processReports(report, reportMap);
        processMails(k, reportMap, answerMap);

        IntStream.range(0, id_list.length)
                .mapToObj(i -> answer[i] = answerMap.get(id_list[i]))
                .collect(Collectors.toList());

        return answer;
    }

    public void setUpMaps(String[] id_list, Map<String, HashSet<String>> reportMap, Map<String, Integer> answerMap) {
        for (String declarant : id_list) {
            HashSet<String> respondentId = new HashSet<>();
            reportMap.put(declarant, respondentId);
            answerMap.put(declarant, 0);
        }
    }

    public void processReports(String[] report, Map<String, HashSet<String>> reportMap) {
        for (String value : report) {
            String[] words = value.split(" ");
            String declarantId = words[0];
            String respondentId = words[1];
            reportMap.get(respondentId).add(declarantId);
        }
    }

    public void processMails(int k, Map<String, HashSet<String>> reportMap, Map<String, Integer> answerMap) {
        for (String reportedUser : reportMap.keySet()) {
            HashSet<String> declarants = reportMap.get(reportedUser);
            if (declarants.size() >= k) {
                for (String declarant : declarants) {
                    answerMap.put(declarant, answerMap.get(declarant) + 1);
                }
            }
        }
    }
}
