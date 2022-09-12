import java.util.Scanner;

public class OneTimeCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double result = 0;

        System.out.println("숫자를 입력해 주세요: ");
        double x = scanner.nextDouble();

        System.out.println("연산자를 선택해주세요:\n" +
                "1. + (더하기)\n" +
                "2. - (빼기)\n" +
                "3. * (곱하기)\n" +
                "4. / (나누기)");
        int chosenOperator = scanner.nextInt();

        System.out.println("숫자를 입력해 주세요: ");
        double y = scanner.nextDouble();

        if (chosenOperator == 1) {
            result = x + y;
        }

        if (chosenOperator == 2) {
            result = x - y;
        }

        if (chosenOperator == 3) {
            result = x * y;
        }

        if (chosenOperator == 4) {
            result = x / y;
        }

        System.out.println("계산 결과: " + result);
    }
}
