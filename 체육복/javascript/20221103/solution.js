export default function solution(n, lost, reserve) {
  const sortedLost = lost.filter((i) => !reserve.includes(i)).sort();
  const sortedReserve = reserve.filter((i) => !lost.includes(i)).sort();

  let result = n - sortedLost.length;

  sortedLost.forEach((lostItem) => {
    if (sortedReserve.includes(lostItem - 1)) {
      const index = sortedReserve.indexOf(lostItem - 1);
      sortedReserve[index] = -1;
      result += 1;
      return;
    }

    if (sortedReserve.includes(lostItem + 1)) {
      const index = sortedReserve.indexOf(lostItem + 1);
      sortedReserve[index] = -1;
      result += 1;
    }
  });

  return result;
}
