import Node from './node';

export default class Queue {
  private head: Node;
  private tail: Node;

  public isEmpty(): boolean {
    return this.head === undefined || this.head === null;
  }

  public peek(): number {
    return this.head ? this.head.data : null;
  }

  public add(data: number): void {
    const node: Node = new Node(data);

    if (this.tail !== undefined && this.tail !== null) {
      this.tail.next = node;
    }

    this.tail = node;

    if (this.head === null || this.head === undefined) {
      this.head = node;
    }
  }

  public remove(): number {
    const data: number = this.head.data;

    this.head = this.head.next;

    if (this.head === null || this.head === undefined) {
      this.tail = null;
    }
    return data;
  }
}
