function test() {
  console.log(`splitWords('FRANCE'): fr,ra,an,nc,ce = ${splitWords('FRANCE')}`);
  console.log(`solution('FRANCE', 'FRENCH'): 16384 = ${solution('FRANCE', 'FRENCH')}`);
  console.log(`solution('aa1+aa2', 'AAAA12'): 43690 = ${solution('aa1+aa2', 'AAAA12')}`);
  console.log(`solution('handshake', 'shake hands'): 65536 = ${solution('handshake', 'shake hands')}`);
}

test();

function solution(str1, str2) {
  let answer = 0;

  const string1 = splitWords(str1);
  const string2 = splitWords(str2);

  const intersection = [];
  const union = [];

  for (let i = 0; i < string1.length; i += 1) {
    if (string2.indexOf(string1[i]) >= 0) {
      intersection.push(string2.splice(string2.indexOf(string1[i]), 1));
    }

    union.push(string1[i]);
  }

  for (let i = 0; i < string2.length; i += 1) {
    union.push(string2[i]);
  }

  answer = parseInt(65536 * (intersection.length / union.length));
  
  if(isNaN(answer)) {
    return 65536;
  }

  return answer;
}

function splitWords(string) {
  const word = string.toLowerCase();
  const words = [];

  for (let i = 0; i < word.length - 1; i += 1) {
    const a = word.charAt(i);
    const b = word.charAt(i + 1);

    if ((a >= 'a' && a <= 'z') && (b >= 'a' && b <= 'z')) {
      words.push(a + b);
    }
  }

  return words;
}
