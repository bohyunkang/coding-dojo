import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("할 일1: ");
        String todo1 = scanner.nextLine();

        System.out.print("할 일2: ");
        String todo2 = scanner.nextLine();

        System.out.print("할 일3: ");
        String todo3 = scanner.nextLine();

        System.out.println("오늘의 할 일 Big3는");
        System.out.println("1. " + todo1);
        System.out.println("2. " + todo2);
        System.out.println("3. " + todo3);
    }
}