import Node from './node';

export default class Stack {
  private top: Node;

  public isEmpty(): boolean {
    return this.top === null || this.top === undefined;
  }

  public peek(): number {
    return this.top ? this.top.data : null;
  }

  public push(data: number): void {
    const node: Node = new Node(data);
    node.next = this.top;
    this.top = node;
  }

  public pop(): number {
    const data: number = this.top.data;
    this.top = this.top.next;
    return data;
  }
}
