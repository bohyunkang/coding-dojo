import java.util.Scanner;

public class BMI {
    public static void main(String[] args) {
        // 스캐너 클래스 사용
        Scanner scanner = new Scanner(System.in);

        // 상수
        double LOW = 18.5;
        int MIDDLE = 23;
        int HIGH = 25;

        String UNDER = "저체중";
        String NORMAL = "정상";
        String OVER = "과체중";
        String FATNESS = "비만";

        // 로직 시작
        System.out.println("BMI 측정기");

        System.out.print("신장(m): ");
        double height = scanner.nextDouble();

        System.out.print("체중(kg): ");
        double weight = scanner.nextDouble();

        double getBMI = weight / (height * height);

        if (getBMI <= LOW) {
            System.out.println("비만도 결과: " + UNDER);
        }
        if (getBMI > LOW && getBMI <= MIDDLE) {
            System.out.println("비만도 결과: " + NORMAL);
        }
        if (getBMI > MIDDLE && getBMI <= HIGH) {
            System.out.println("비만도 결과: " + OVER);
        }
        if (getBMI > HIGH) {
            System.out.println("비만도 결과: " + FATNESS);
        }

        System.out.println("BMI: " + getBMI);
        
    }
}
