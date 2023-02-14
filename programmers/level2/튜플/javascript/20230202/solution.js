function solution(s) {
  const answer = tuple(s);

  return answer;
}

function tuple(s) {
  const tupleSet = new Set();
  const tuple = s.substring(1, s.length - 1).split("},");

  for (let i = 0; i < tuple.length; i += 1) {
    tuple[i] = tuple[i].replace("{", "");
    tuple[i] = tuple[i].replace("}", "");
  }

  const sortedByLength = tuple.sort((a, b) => a.length - b.length);

  for (const value of sortedByLength) {
    const array = value.split(",");

    for (const element of array) {
      tupleSet.add(element);
    }
  }

  const answer = [];

  for (const value of tupleSet) {
    answer.push(parseInt(value));
  }

  return answer;
}
