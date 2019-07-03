import IDriver from './driver.interface';

export default abstract class Heap {
  protected size: number = 0;
  protected capacity: number = 30;
  protected heapBox: number[] = [];

  public insert(val: number): number {
    if (this.capacity === this.size) throw 'Heap capacity is full.';

    this.heapBox[this.size++] = val;
    this.heapifyUp();

    return this.size;
  }

  public poll(): any {
    if (this.size === 0) throw 'Value not found';

    const item = this.heapBox[0];

    this.heapBox[0] = this.heapBox[--this.size];
    this.heapBox.splice(this.size, 1);

    this.heapifyDown();

    return item;
  }

  public peek(): number {
    if (this.size === 0) throw 'Peek value not found';

    return this.heapBox[0];
  }

  public getLeftIndex(parentIndex: number): number {
    return Math.pow(parentIndex, 2) + 1;
  }

  public getRightIndex(parentIndex: number): number {
    return Math.pow(parentIndex, 2) + 2;
  }

  public getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  public hasParent(index: number): boolean {
    return this.getParentIndex(index) >= 0;
  }

  public hasLeft(index: number): boolean {
    return this.getLeftIndex(index) < this.size;
  }

  public hasRight(index: number): boolean {
    return this.getRightIndex(index) < this.size;
  }

  public getLeft(index: number): number {
    return this.heapBox[this.getLeftIndex(index)];
  }

  public getRight(index: number) {
    return this.heapBox[this.getRightIndex(index)];
  }

  public getParent(index: number): number {
    return this.heapBox[this.getParentIndex(index)];
  }

  public getHeapBox(): number[] {
    return this.heapBox;
  }

  protected swap(index1: number, index2: number): void {
    const temp: number = this.heapBox[index1];

    this.heapBox[index1] = this.heapBox[index2];
    this.heapBox[index2] = temp;
  }

  abstract heapifyUp();
  abstract heapifyDown();
}
