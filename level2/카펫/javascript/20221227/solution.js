function solution(brown, yellow) {
  let column = 3;

  return getRowAndColumn(brown, yellow, column);
}

function getRowAndColumn(brown, yellow, column) {
  const row = (brown - (column * 2)) / 2 + 2;

  if ((column - 2) * (row - 2) == yellow) {
    return [row, column];
  }

  column += 1;

  return getRowAndColumn(brown, yellow, column);
}
