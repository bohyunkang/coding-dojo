public class Solution {
    public long solution(int price, int money, int count) {
        long totalPrice = computeTotalPrice(price, count);

        long answer = checkMoney(money, totalPrice);

        return answer;
    }

    public long computeTotalPrice(int price, int count) {
        long totalPrice = 0;

        for (int i = 0; i <= count; i += 1) {
            totalPrice += price * i;
        }

        return totalPrice;
    }

    public long checkMoney(int money, long totalPrice) {
        if (money >= totalPrice) {
            return 0;
        }

        return totalPrice - money;
    }
}
