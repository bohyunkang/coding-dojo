// 문제 링크: https://leetcode.com/problems/maximum-depth-of-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

/**
 * 1. 왼쪽이든, 오른쪽이든 상관없이 가장 깊은 노드가 몇 depth인지를 구하는 문제.
 * 2. maxDepth라는 함수를 만들어 재귀를 돌린다.
 *   a. root가 null인 경우 노드가 존재하지 않으므로 이전 노드의 깊이만 유지하면 됨.
 *   b. 왼쪽 서브트리의 최대 깊이를 계산한다.
 *   c. 오른쪽 서브트리의 최대 깊이를 계산한다.
 *   d. 두 깊이 중 더 큰 값에 1(현재 노드의 깊이)를 더해서 반환한다.
 */
var maxDepth = function (root) {
  // 노드가 null이면 깊이는 0
  if (root === null) {
    return 0;
  }

  // 왼쪽 서브트리의 최대 깊이를 재귀적으로 계산
  const leftDepth = maxDepth(root.left);

  // 오른쪽 서브트리의 최대 깊이를 재귀적으로 계산
  const rightDepth = maxDepth(root.right);

  // 현재 노드의 깊이는 왼쪽과 오른쪽 중 더 큰 값 + 1(현재 노드)
  return Math.max(leftDepth, rightDepth) + 1;
};
