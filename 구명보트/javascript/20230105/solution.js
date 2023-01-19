function solution(people, limit) {
  let answer = 0;

  const sortedPeople = people.sort((a, b) => a - b);

  let min = 0;
  let max = sortedPeople.length - 1;

  while (max >= min) {
    if (sortedPeople[min] + sortedPeople[max] <= limit) {
      min += 1;
    }

    max -= 1;
    answer += 1;
  }

  return answer;
}
