export function getSortedArray(array) {
  return array.sort();
}

export default function solution(participant, completion) {
  const sortedParticipant = getSortedArray(participant);
  const sortedCompletion = getSortedArray(completion);

  return sortedParticipant.filter((player, i) => player !== sortedCompletion[i]).join('');
}

export function useForLoop(participant, completion) {
  const sortedParticipant = getSortedArray(participant);
  const sortedCompletion = getSortedArray(completion);

  for (let i = 0; i < sortedParticipant.length; i += 1) {
    if (sortedParticipant[i] !== sortedCompletion[i]) {
      return sortedParticipant[i];
    }
  }
}
