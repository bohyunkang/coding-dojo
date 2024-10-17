// 문제 링크: https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // 뒤집힌 리스트의 마지막 노드(원래 리스트의 첫 번째 노드)가 가리킬 next 값을 null로 초기화
  let prev = null;
  // 현재 노드를 가리킬 포인터를 head로 초기화
  let current = head;

  // 리스트의 끝(null)에 도달할 때까지 반복
  while (current !== null) {
    // 다음 노드를 임시로 저장
    let nextTemp = current.next;
    // 현재 노드의 next를 이전 노드로 변경
    current.next = prev;
    // 이전 노드를 현재 노드로 변경
    prev = current;
    // 현재 노드를 다음 노드로 변경
    current = nextTemp;
  }

  // 이전 노드가 결과 리스트의 헤드가 되므로 반환
  return prev;
};
