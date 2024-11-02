// 문제 링크: https://leetcode.com/problems/same-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

/**
 * 1. 동일한 트리인지를 구하는 문제.
 * 2. 위치와 값이 같지 않으면 바로 false 리턴
 * 3. 그렇지 않다면 계속 검사하고 무사히 통과하면 true
 *  - 현재 노드들의 존재 여부
 *  - 현재 노드들의 값 비교
 *  - 왼쪽 자식들의 재귀적 비교
 *  - 오른쪽 자식들의 재귀적 비교
 */
var isSameTree = function (p, q) {
  // 두 노드가 모두 null인 경우 true 반환
  if (!p && !q) {
    return true;
  }

  // 한 노드만 null인 경우 false 반환
  if (!p || !q) {
    return false;
  }

  // 노드 값이 다르면 true를 반환
  if (p.val !== q.val) {
    return false;
  }

  // 왼쪽, 오른쪽 서브트리 모두 비교
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
