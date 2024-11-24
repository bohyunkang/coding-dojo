/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // 시작 시간 기준으로 구간 정렬
  intervals.sort((a, b) => a[0] - b[0]);

  // 병합된 구간을 저장할 merged 배열 선언
  const merged = [];

  for (let i = 0; i < intervals.length; i += 1) {
    // merged가 비어있거나 현재 구간이 마지막 구간과 겹치지 않는 경우 현재 구간을 목록에 추가
    if (merged.length === 0 || merged[merged.length - 1][1] < intervals[i][0]) {
      merged.push(intervals[i]);
    } else {
      // 그렇지 않을 경우 현재 구간을 merged의 마지막 구간과 병합
      merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], intervals[i][1]);
    }
  }

  return merged;
};
