// 문제 링크: https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 투 포인터 사용해서 풀이
  let result = new ListNode(0);
  result.next = head;

  let first = result;
  let second = result;

  // 첫 번째 포인터를 n + 1만큼 전진
  for (let i = 0; i <= n; i += 1) {
    first = first.next;
  }

  // 두 포인터를 모두 이동
  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  // n번째 노드 제거
  second.next = second.next.next;

  return result.next;
};
