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
  // root가 null이면 null 반환
  if (root === null) {
    return null;
  }

  // 현재 노드의 왼쪽 자식을 임시 변수에 저장
  let left = root.left;
  // 왼쪽 자식을 오른쪽 자식으로 저장
  root.left = root.right;
  // 오른쪽 자식을 임시 변수에 저장해놓은 왼쪽 자식으로 저장
  root.right = left;

  // 재귀적으로 같은 작업을 수행
  invertTree(root.left);
  invertTree(root.right);

  // 그렇게 교환된 트리를 반환
  return root;
};
