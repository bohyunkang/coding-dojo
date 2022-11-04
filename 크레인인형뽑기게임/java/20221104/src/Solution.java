import java.util.Stack;

class Solution {
    public int solution(int[][] board, int[] moves) {
        int answer = 0;

        Stack<Integer> stack = new Stack<>();

        for (int move : moves) {
            int j = move - 1;

            System.out.println("move >>>>" + move + " && j >>>>" + j);

            for (int i = 0; i < board.length; i++) {
                if (board[i][j] > 0) {
                    if (stack.isEmpty()) {
                        stack.push(0);
                    }

                    if (stack.peek() == board[i][j]) {
                        stack.pop();
                        answer += 2;
                        board[i][j] = 0;
                        break;
                    }

                    stack.push(board[i][j]);
                    board[i][j] = 0;
                    break;
                }
            }
        }

        return answer;
    }
}
