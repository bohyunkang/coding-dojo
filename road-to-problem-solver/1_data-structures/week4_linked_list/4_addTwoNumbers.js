// 문제 링크: https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/**
 * 풀이
 * 1. 두 리스트를 동시에 순회하면서 각 자릿수를 더한다.
 * 2. 덧셈 결과가 10 이상이면 올림(carry)을 다음 자릿수로 전달한다.
 * 3. 결과를 새로운 연결 리스트로 만들어 반환한다.
 */
var addTwoNumbers = function (l1, l2) {
  let result = new ListNode(0);
  let current = result;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;
    const sum = carry + x + y;

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return result.next;
};
