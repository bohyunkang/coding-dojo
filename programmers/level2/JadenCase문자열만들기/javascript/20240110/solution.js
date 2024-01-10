function solution(s) {
  return s
    .split(' ')
    .map((string) => {
      return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
    })
    .join(' ');
}

console.log(solution('3people unFollowed me'), '정답: 3people Unfollowed Me');
console.log(solution('for the last week'), '정답: For The Last Week');
