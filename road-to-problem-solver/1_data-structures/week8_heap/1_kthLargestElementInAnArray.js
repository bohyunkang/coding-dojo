// 문제 링크: https://leetcode.com/problems/kth-largest-element-in-an-array/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const minHeap = new MinHeap();

  // 배열 순회하며 힙에 요소를 추가합니다.
  for (let num of nums) {
    minHeap.insert(num);
    // 힙의 크기가 k를 초과하면 가장 작은 요소를 제거하여 k 크기를 유지합니다.
    if (minHeap.size() > k) {
      minHeap.remove();
    }
  }

  // 최종적으로 최소 힙의 루트에는 k번째로 큰 요소가 남습니다.
  return minHeap.peek();
};

// 최소 힙
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  remove() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
        smallest = leftChildIndex;
      }
      if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
        smallest = rightChildIndex;
      }
      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }
}
