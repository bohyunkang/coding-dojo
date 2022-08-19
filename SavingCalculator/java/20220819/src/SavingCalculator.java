import java.util.Scanner;
import java.text.DecimalFormat;

public class SavingCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        DecimalFormat decFormat = new DecimalFormat("###,###");

        System.out.println("적금 이자 계산기");

        System.out.println("월적립액을 입력해주세요(원): ");
        int savingsPerMonth = scanner.nextInt();

        System.out.println("적금 기간을 입력해주세요(년): ");
        int savingsPeriod = scanner.nextInt();

        System.out.println("연이자율을 입력해주세요(%): ");
        double ratePerYear = scanner.nextDouble();

        int savingsPeriodToMonth = savingsPeriod * 12;
        int totalDeposit = savingsPerMonth * savingsPeriodToMonth;
        double interestRate = ratePerYear / 100 / 12;

        double getPow = Math.pow((1 + interestRate), savingsPeriodToMonth);

        double totalSavings = savingsPerMonth * (1 + interestRate) * (getPow - 1) / interestRate;
        double interestRateBeforeTax = (int)(totalSavings - totalDeposit);
        double interestRateAfterTax = Math.ceil(interestRateBeforeTax - interestRateBeforeTax * 0.154);

        double finalAmount = totalDeposit + (int)(interestRateAfterTax);

        System.out.println("원급합계: " + decFormat.format(totalDeposit) + "원");
        System.out.println("세후이자액: " + decFormat.format((int)(interestRateAfterTax)) + "원");
        System.out.println("세후 총 수령액: " + decFormat.format((int)(finalAmount)) + "원");
    }
}
