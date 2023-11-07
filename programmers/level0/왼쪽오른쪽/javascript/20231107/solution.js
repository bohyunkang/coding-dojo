function solution(str_list) {
  const index = str_list.findIndex((str) => str === 'l' || str === 'r');

  if (index === -1) {
    return [];
  }

  if (str_list[index] === 'l') {
    return str_list.slice(0, index);
  }

  return str_list.slice(index + 1);
}
