// test();

function test() {
  const list1 = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"];
  console.log(`solution(3, list1): [3, 3] === ${solution(3, list1)}`);

  const list2 = ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"];
  console.log(`solution(5, list2): [0, 0] === ${solution(5, list2)}`);

  const list3 = ["hello", "one", "even", "never", "now", "world", "draw"];
  console.log(`solution(2, list3): [1, 3] === ${solution(2, list3)}`);
}

function solution(n, words) {
  const answer = [0, 0];

  const listOfWords = new Map();

  for (let i = 0; i < words.length; i += 1) {
    if (listOfWords.has(words[i]) || isWrongWord(words, i)) {
      answer[0] = Math.floor(i % n) + 1;
      answer[1] = Math.floor(i / n) + 1;

      return answer;
    }

    listOfWords.set(words[i], i);
  }

  return answer;
}

function isWrongWord(words, turn) {
  if (turn === 0) {
    return false;
  }

  return words[turn].charAt(0) !== words[turn - 1].charAt(words[turn - 1].length - 1);
}
