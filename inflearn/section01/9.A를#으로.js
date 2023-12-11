function solution(s) {
  if (!isUppercase(s)) {
    return;
  }

  if (!s.includes('A')) {
    return;
  }

  return s.replaceAll('A', '#');
}

function isUppercase(s) {
  return s === s.toUpperCase();
}
