function solution(n, arr1, arr2) {
  arr1 = toBinary(arr1, n);
  arr2 = toBinary(arr2, n);

  const decodedArray = combine(arr1, arr2);

  return decodedArray.map((number) =>
    [...number].map((item) => (item > 0 ? '#' : ' ')).join(''),
  );
}

function toBinary(array, n) {
  return array.map((number) => {
    const length = number.toString(2).length;

    if (n > length) {
      const count = n - length;
      return '0'.repeat(count) + number.toString(2);
    }

    return number.toString(2);
  });
}

function combine(arr1, arr2) {
  return arr1.map((number, i) =>
    [...number].map((item, j) => Number(item) + Number(arr2[i][j])).join(''),
  );
}

// for문을 사용한 combine
function combine(arr1, arr2) {
  const array = [];

  for (let i = 0; i < arr1.length; i += 1) {
    const tmp = [];

    for (let j = 0; j < arr1[i].length; j += 1) {
      const combinedNumber = Number(arr1[i][j]) + Number(arr2[i][j]);
      tmp.push(combinedNumber);
    }

    array.push(tmp.join(''));
  }

  return array;
}

console.log(
  solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]),
  '정답: ["#####","# # #", "### #", "# ##", "#####"]',
);

console.log(
  solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]),
  '정답: ["######", "### #", "## ##", " #### ", " #####", "### # "]',
);
