import Node from './node';

export default class LinkedList {
  public head: Node;

  public append(data: number): void {
    if (this.head === undefined) {
      this.head = new Node(data);
      return;
    }

    let current: Node = this.head;

    while (current && current.next !== undefined) {
      current = current.next;
    }

    current.next = new Node(data);
  }

  public prepend(data: number): void {
    const newHead = new Node(data);
    newHead.next = this.head;
    this.head = newHead;
  }

  public deleteWithValue(data: number): void {
    if (this.head === undefined) return;

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current: Node = this.head;

    while (current && current.next !== undefined) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }

      current = current.next;
    }
  }
}
