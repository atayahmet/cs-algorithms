import MaxHeap from 'heap/src/maxheap';
import { IJob } from './priority-queue';

export default class Heapify extends MaxHeap {
  protected heapBox: any[] = [] as IJob[];

  constructor() {
    super();
  }

  public insert(...data: any[]): number {
    const [priority, payload] = data;
    this.heapBox[this.size++] = {...payload, priority} as IJob;
    this.heapifyUp();
    return this.size;
  }

  public heapifyUp() {
    let index: number = this.size - 1;
    while (this.hasParent(index)) {
      let biggerChildIndex: number = this.getParentIndex(index);

      if (this.heapBox[index].priority < this.heapBox[biggerChildIndex].priority) {
        break;
      } else {
        this.swap(biggerChildIndex, index);
      }

      index = biggerChildIndex;
    }
  }

  public heapifyDown(): void {
    let index: number = 0;

    while (this.hasLeft(index)) {
      let biggerChildIndex: number = this.getLeftIndex(index);

      const right = this.getRight(index) as any;
      const left = this.getLeft(index) as any;

      if (this.hasRight(index) && right.priority > left.priority) {
        biggerChildIndex = this.getRightIndex(index);
      }

      // if right value greater than left value, stop the loop.
      if (!(this.heapBox[biggerChildIndex].priority > this.heapBox[index].priority)) {
        break;
      }

      this.swap(biggerChildIndex, index);

      index = biggerChildIndex;
    }
  }
}
