/**
 * @param {number[]} prices
 * @return {number}
 */
// 풀이 1
var maxProfit = function (prices) {
  /**
    1. 배열의 첫 번째 요소를 최소 가격으로 초기화한다.
    2. 배열을 순회하면서:
      a. 현재 가격이 최소 가격보다 작으면 최소 가격을 업데이트한다.
      b. 그렇지 않으면, 현재 가격과 최소 가격의 차이(현재 이익)를 계산한다.
      c. 현재 이익이 지금까지의 최대 이익보다 크면 최대 이익을 업데이트한다.
    3. 최종적으로 계산된 최대 이익을 반환한다.
  */
  let maxProfit = 0;
  let currentPrice = prices[0];

  for (let i = 1; i < prices.length; i += 1) {
    if (prices[i] < currentPrice) {
      currentPrice = prices[i];
      continue;
    }

    if (prices[i] > currentPrice) {
      const temp = prices[i] - currentPrice;

      if (maxProfit <= temp) {
        maxProfit = temp;
      }
    }
  }

  return maxProfit;
};

// 풀이 2: 풀이 1 리팩토링
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i += 1) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
      continue;
    }

    const currentProfit = prices[i] - minPrice;

    maxProfit = Math.max(maxProfit, currentProfit);
  }

  return maxProfit;
};