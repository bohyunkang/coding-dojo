// 문제 링크: https://leetcode.com/problems/invert-binary-tree/
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
 * @return {TreeNode}
 */

/**
 * 1. 왼쪽 서브트리를 오른쪽으로, 오른쪽 서브트리를 왼쪽으로 옮기는 문제.
 * 2. 각 노드에서 해야 할 작업:
    - 현재 노드의 왼쪽과 오른쪽 자식을 임시 변수에 저장
    - 자식 노드들을 서로 교환
    - 교환된 자식 노드들에 대해 재귀적으로 같은 작업 수행
 */
var invertTree = function (root) {
  if (root === null) {
    return null;
  }

  let left = root.left;
  root.left = root.right;
  root.right = left;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};
