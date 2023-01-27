function caesar(char, n) {
  if (char < 65) {
    return char;
  }

  if (char < 97) {
    return 65 + ((char - 65 + n) % 26);
  }

  return 97 + ((char - 97 + n) % 26);
}

export default function solution(s, n) {
  return s
    .split('')
    .map((char) => String.fromCharCode(caesar(char.charCodeAt(0), n)))
    .join('');
}
