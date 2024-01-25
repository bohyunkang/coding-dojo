/**
 * [풀이 과정]
 * 1. 귤을 Map 자료 구조로 저장한다. (key: 중복되면 안되는 귤의 크기, value: 해당 크기의 귤의 수량)
 * 2. 이때, 귤 map을 갯수 기준으로 내림차순으로 저장한다.(이때 배열로 변환)
 * 3. k만큼 순회하며 귤 map에 저장된 크기에서 많은 순대로 k를 감소시키고, 종류(answer)를 +1한다.
 */
function getDictionary(tangerine) {
  const map = new Map();

  for (const size of tangerine) {
    if (map.has(size)) {
      const prevValue = map.get(size);
      map.set(size, prevValue + 1);
      continue;
    }

    map.set(size, 1);
  }

  return Array.from(map).sort((a, b) => b[1] - a[1]);
}

function solution(k, tangerine) {
  const dictionary = getDictionary(tangerine);

  let answer = 0;

  for (let i = 0; i < dictionary.length; i += 1) {
    const value = dictionary[i][1];

    if (k - value <= 0) {
      answer += 1;
      break;
    }

    k -= value;
    answer += 1;
  }

  return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]), '정답: 3');
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]), '정답: 2');
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]), '정답: 1');
console.log(solution(3, [1, 1, 2, 2]), '정답: 2');
console.log(solution(1, [1, 1]), '정답: 1');
console.log(solution(2, [1000, 2000, 2000, 1000]), '정답: 1');
