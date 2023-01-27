function solution(citations) {
  const sortedCitations = [...citations].sort((a, b) => b - a);

  let index = 0;

  for (let i = 0; i < sortedCitations.length; i += 1) {
    if (sortedCitations[i] >= i + 1) {
      index += 1;
    }
  }

  return index;
}
