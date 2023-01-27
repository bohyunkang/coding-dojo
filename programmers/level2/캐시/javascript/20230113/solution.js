function toLowerCase(cities) {
  return cities.map(city => city.toLowerCase());
}

function solution(cacheSize, cities) {
  let runtime = 0;
  const citiesToLowerCase = toLowerCase(cities);
  let cacheList = [];

  for (const city of citiesToLowerCase) {
    if (cacheSize === 0) {
      runtime += 5;
      continue;
    }

    if (cacheList.length > cacheSize) {
      cacheList.shift();
    }

    if (cacheList.includes(city)) {
      runtime += 1;
      cacheList = cacheList.filter(item => item !== city);
      cacheList.push(city);
    }

    if (!cacheList.includes(city)) {
      runtime += 5;
      cacheList.push(city);
    }
  }

  return runtime;
}
