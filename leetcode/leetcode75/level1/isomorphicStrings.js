function isEqual(string) {
  const dictionary = [];

  const characters = string.split("");

  characters.forEach((char) => {
    if (dictionary.includes(char)) {
      return;
    }

    dictionary.push(char);
  });

  return characters.map(i => dictionary.indexOf(i)).join(" ");
}

const isIsomorphic = function(s, t) {
  return isEqual(s) === isEqual(t);
};
