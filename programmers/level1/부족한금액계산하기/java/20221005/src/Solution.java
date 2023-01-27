import java.util.stream.LongStream;

public class Solution {
    public long solution(int price, int money, int count) {
        long totalPrice = computeTotalPrice(price, count);

        return checkMoney(money, totalPrice);
    }

    public long computeTotalPrice(int price, int count) {
        return LongStream.rangeClosed(1, count).sum() * price;
    }

    public long checkMoney(int money, long totalPrice) {
        if (money >= totalPrice) {
            return 0;
        }

        return totalPrice - money;
    }
}
