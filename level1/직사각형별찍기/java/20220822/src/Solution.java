import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();

        if (!(a <= 2000 || b <= 2000)) {
            System.exit(0);
        }

        for (int i = 0; i < b; i += 1) {
            for (int j = 0; j < a; j += 1) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
