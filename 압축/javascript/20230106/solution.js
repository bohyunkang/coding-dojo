function solution(msg) {
  const answer = compress(msg);
  return answer;
}

function compress(msg) {
  let message = msg;
  const answer = [];

  const dictionary = {};
  for (let i = 0; i < 26; i += 1) {
    dictionary[String.fromCharCode('A'.charCodeAt(0) + i)] = i + 1;
  }

  while (message.length > 0) {
    const length = wLength(message, dictionary);
    const w = message.substring(0, length);

    answer.push(dictionary[w]);
    message = message.substring(length);
    
    if (message.length > 0) {
      dictionary[w + message.substring(0, 1)] = Object.keys(dictionary).length + 1;
    }
  }

  return answer;
}

function wLength(msg, dictionary) {
  if (dictionary[msg]) {
    return msg.length;
  }

  for (let i = 0; i < msg.length; i += 1) {
    if (!dictionary[msg.substring(0, i + 1)]) {
      return i;
    }
  }

  return -1;
}
