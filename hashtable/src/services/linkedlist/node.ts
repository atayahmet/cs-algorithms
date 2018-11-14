export default class Node {
  public next: Node;
  public data: any;

  public constructor(data: any) {
    this.data = data;
  }
}
