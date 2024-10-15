// 문제 링크: https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // 결과 노드를 생성 => 결과 리스트의 헤드 이전 노드 역할
  let result = new ListNode(0);

  // 현재 노드를 가리키는 포인터를 결과 노드로 초기화
  let current = result;

  // list1과 list2 모두 노드가 남아있는 동안 반복
  while (list1 !== null && list2 !== null) {
    // list1의 값이 list2의 값보다 작거나 같으면
    if (list1.val <= list2.val) {
      // list1의 현재 노드를 결과 리스트에 연결
      current.next = list1;
      // list1을 다음 노드로 이동
      list1 = list1.next;
    } else {
      // 그렇지 않으면 list2의 현재 노드를 결과 리스트에 연결
      current.next = list2;
      // list2를 다음 노드로 이동
      list2 = list2.next;
    }
    // 현재 포인터를 방금 추가한 노드로 이동
    current = current.next;
  }

  // list1에 노드가 남아있으면, 그대로 결과 리스트 끝에 추가
  if (list1 !== null) {
    current.next = list1;
  }

  // list2에 노드가 남아있으면, 그대로 결과 리스트 끝에 추가
  if (list2 !== null) {
    current.next = list2;
  }

  // 결과 노드의 next가 실제 결과 리스트의 헤드이므로 반환
  return result.next;
};
