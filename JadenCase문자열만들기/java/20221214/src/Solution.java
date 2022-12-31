public class Solution {
    public String solution(String s) {
        StringBuilder answer = new StringBuilder();
        String[] characters = s.toLowerCase().split("");

        boolean flag = true;

        for (String character : characters) {
            answer.append(flag ? character.toUpperCase() : character);
            flag = character.equals(" ");
        }

        return answer.toString();
    }

// 연속된 공백때문에 실패하는 케이스
//    public String solution(String s) {
//        String[] array = splitString(s);
//
//        return Arrays.stream(array)
//                .map(i -> replace(i))
//                .collect(Collectors.joining(" "));
//    }
//
//    public String[] splitString(String string) {
//        return string.split(" ");
//    }
//
//    public boolean isNumber(String word) {
//        String[] array = word.split("");
//
//        return array[0].matches("[0-9]");
//    }
//
//    public String replace(String word) {
//        String[] array = word.split("");
//
//        array[0] = array[0].toUpperCase();
//
//        for (int i = 1; i < array.length; i += 1) {
//            array[i] = array[i].toLowerCase();
//        }
//
//        return String.join("", array);
//    }
}

