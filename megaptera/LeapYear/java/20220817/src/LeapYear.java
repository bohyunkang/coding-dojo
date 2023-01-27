import java.util.Scanner;

public class LeapYear {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("연도: ");
        int year = scanner.nextInt();

        if (year >= 1900 && year < 2023) {
            if (year % 4 == 0 && year % 100 == 0) {
                if (year % 400 == 0) {
                    System.out.println(true);
                    System.exit(0);
                }

                System.out.println(false);
                System.exit(0);
            }

            if (year % 4 == 0) {
                System.out.println(true);
            }

            if (!(year % 4 == 0)) {
                System.out.println(false);
            }
        }
    }
}
