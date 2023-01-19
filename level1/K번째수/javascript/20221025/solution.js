export function sliceAndSort(array, command) {
  return array.slice(command[0] - 1, command[1]).sort((a, b) => a - b)[command[2] - 1];
}

export default function solution(array, commands) {
  return commands.map((i) => sliceAndSort(array, i));
}
