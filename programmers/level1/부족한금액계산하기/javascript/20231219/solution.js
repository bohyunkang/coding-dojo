// 풀이 1: for문 사용
// 1. totalPrice라는 변수를 선언
// 2. for문을 count 수만큼 돌려 놀이기구를 타기 위해 필요한 금액을 totalPrice에 저장한다.
// 3. 만약 totalPrice가 가진 돈보다 초과한다면 totalPrice에 가진 돈 money를 빼고, 아니면 0을 반환한다.
function solution(price, money, count) {
  let totalPrice = 0;

  for (let i = 1; i <= count; i += 1) {
    totalPrice += price * i;
  }

  return totalPrice > money ? totalPrice - money : 0;
}

// 풀이 2: 가우스 공식 활용
// [1부터 n까지의 합을 구하는 가우스 공식] = n * (n + 1) / 2
// 1. 1부터 count 만큼의 합을 구하고 거기에 price를 곱하여 totalPrice를 구한다.
// 2. 위 풀이와 똑같이 만약 totalPrice가 가진 돈보다 초과한다면 totalPrice에 가진 돈 money를 빼고, 아니면 0을 반환한다.
function solution(price, money, count) {
  const totalPrice = (price * count * (count + 1)) / 2;

  return totalPrice > money ? totalPrice - money : 0;
}
