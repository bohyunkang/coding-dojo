function solution(s) {
  const array = s.split(' ');

  return `${Math.min(...array)} ${Math.max(...array)}`;
}

solution('1 2 3 4');
solution('-1 -2 -3 -4');
solution('-1 -1');
