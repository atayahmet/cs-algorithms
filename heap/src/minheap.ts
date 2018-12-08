import IDriver from './driver.interface';
import Heap from './heap';

export default class MinHeap extends Heap implements IDriver {
  protected heapBox: number[] = [];

  public heapifyUp(): void {
    let index: number = this.size - 1;
    while (this.hasParent(index) && this.getParent(index) > this.heapBox[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  public heapifyDown(): void {
    let index: number = 0;

    while (this.hasLeft(index)) {
      let smallerChildIndex: number = this.getLeftIndex(index);

      if (this.hasRight(index) && this.getRight(index) < this.getLeft(index)) {
        smallerChildIndex = this.getRightIndex(index);
      }

      if (this.heapBox[index] < this.heapBox[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }

      index = smallerChildIndex;
    }
  }
}
