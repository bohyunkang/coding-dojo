public class Solution {
    public int[] arr;
    public int N;
    public int count = 0;

    public int solution(int n) {
        N = n;
        arr = new int[N];

        nQueen(0);

        return count;
    }

    public void nQueen(int depth) {
        // 모든 원소를 다 채운 상태라면 count 증가 및 return!
        if (depth == N) {
            count += 1;
            return;
        }

        for (int i = 0; i < N; i += 1) {
            arr[depth] = i;

            // 놓을 수 있는 위치의 경우 재귀호출!
            if (isVulnerable(depth)) {
                nQueen(depth + 1);
            }
        }
    }

    public boolean isVulnerable(int col) {
        for (int i = 0; i < col; i += 1) {
            // 같은 행에 존재할 경우 (= 해당 열의 행과 i열의 행이 일치할 경우)
            if (arr[col] == arr[i]) {
                return false;
            }

            // 대각선 상에 놓여 있는 경우 (= 열의 차와 행의 차가 같을 경우)
            if (Math.abs(col - i) == Math.abs(arr[col] - arr[i])) {
                return false;
            }
        }

        return true;
    }
}
