import IDriver from './driver.interface';
import Heap from './heap';

export default class MaxHeap extends Heap implements IDriver {
  protected heapBox: number[] = [];

  public heapifyDown(): void {
    let index: number = 0;

    while (this.hasLeft(index)) {
      let biggerChildIndex: number = this.getLeftIndex(index);

      if (this.hasRight(index) && this.getRight(index) > this.getLeft(index)) {
        biggerChildIndex = this.getRightIndex(index);
      }

      this.swap(biggerChildIndex, index);

      index = biggerChildIndex;
    }
  }

  public heapifyUp(): void {
    let index: number = this.size - 1;

    while (this.hasParent(index)) {
      let biggerChildIndex: number = this.getParentIndex(index);

      if (this.heapBox[index] < this.heapBox[biggerChildIndex]) {
        break;
      } else {
        this.swap(biggerChildIndex, index);
      }

      index = biggerChildIndex;
    }
  }
}
