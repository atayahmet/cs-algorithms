export default class Node {
  public next: Node;
  public data: number;

  public constructor(data: number) {
    this.data = data;
  }
}
