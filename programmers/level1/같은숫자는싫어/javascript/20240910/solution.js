// 풀이 1: for 사용
function solution(arr) {
  const array = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (array.includes(arr[i])) return;
    array.push(arr[i]);
  }

  return array;
}

// 풀이 2: filter 사용
function solution(arr) {
  return arr.filter((num, i) => num !== arr[i - 1]);
}

// 풀이 3: reduce 사용
function solution(arr) {
  return arr.reduce((acc, num, i) => {
    if (num !== arr[i - 1]) {
      acc.push(num);
    }

    return acc;
  }, []);
}
