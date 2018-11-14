import ImplementerInterface from '../implementer.interface';
import LinkedListService from '../services/linkedlist/linkedlist';
import Node from '../services/linkedlist/node';
import { hash } from '../hash';

export default class LinkedList implements ImplementerInterface {
  protected table = {} as LinkedListService;
  protected size: number = 20;

  constructor(size: number) {
    this.resize(size || this.size);
  }

  public insert(key: string, value: any): boolean|number {
    // generate hash via passed key
    let index: number = hash(key, this.size);

    const count = Object.keys(this.getTable()).length;

    if (!this.table[index] && !(count < this.size)) {
      return false;
    }

    // create new linkedlist instance to new bucket
    if (! (this.table[index] instanceof LinkedListService)) {
      this.table[index] = new LinkedListService;
    }

    return !!this.table[index].append({ key, value}) ? index : false;
  }

  public search(key: string): Node {
    // generate hash via passed key
    let index: number = hash(key, this.size);

    // get the bucket with hash
    let node = this.table[index];

    if (! node) return;

    // if the node, head in the current node and data key have exists
    // contunies the loop
    while (node && node.head !== undefined && node.head.data.key !== key) {
      node = node.next;
    }

    return node ? node.head : node;
  }

  public resize(size: number): void {
    // assign the new size of table
    this.size = size;

    // clone hash table to new local variablle
    const table = { ...this.table };

    // set empty object
    this.table = {} as LinkedListService;

    // iterate the all buckets
    for (const hash of Object.keys(table)) {
      // get head node
      let node: Node = table[hash].head;

      // iterate the all nodes to till the end
      while (node && node.next) {

        // get key and value
        const { key, value } = node.data;

        // re-send key and value to hash table
        this.insert(key, value);

        // get next node
        node = node.next;
      }
    }
  }

  public getTable(): any {
    return this.table;
  }
}
