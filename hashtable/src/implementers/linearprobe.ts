import ImplementerInterface from '../implementer.interface';
import HashTableInterface from '../hashtable.interface';
import { hash } from '../hash';

export default class LinearProbe implements ImplementerInterface {
  protected table: HashTableInterface = {}
  protected size: number = 0;

  constructor(size: number = 0) {
    this.resize(size);
  }

  public insert(key: string, value: any): number|boolean {
    // generate hash via passed key
    let index: number = hash(key, this.size);

    const count = Object.keys(this.getTable()).length;

    // iterate the all rows in table
    while (this.table[index] !== undefined && count < this.size) {
      // generate hash again
      index = (index + 1) % this.size;
    }

    this.table[index] = { key, value };

    return this.table[index] ? index : false;
  }

  public search(key: string): any {
    // generate hash via passed key
    let index: number = hash(key, this.size);

    while (this.table[index] !== undefined && this.table[index].key !== key) {
      index = (index + 1) % this.size;
    }

    return this.table[index];
  }

  public resize(size: number): void {
    this.size = size;

    const table = { ...this.table };

    this.table = {};

    for (const hash of Object.keys(table)) {
      const { key, value } = table[hash];
      this.insert(key, value);
    }
  }

  public getTable(): HashTableInterface {
    return this.table;
  }
}
