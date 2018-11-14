import ImplementerInterface from '../implementer.interface';
import HashTableInterface from '../hashtable.interface';
import { hash } from '../hash';

export default class QuadraticProbe implements ImplementerInterface {
  protected table: HashTableInterface = {}
  protected size: number = 20;

  constructor(size: number) {
    this.resize(size || this.size);
  }

  public insert(key: string, value: any): boolean|number {
    let index: number = hash(key, this.size);
    let h = 0;

    while (this.table[index] !== undefined && h <= this.size) {
      index = (index + Math.pow(h, 2)) % this.size;
      h++;

      if (h > this.size) {
        return false;
      }
    }

    this.table[index] = { key, value };

    return index;
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

  public search(key: string): any {
    let index = hash(key, this.size);
    let h = 0;

    while (this.table[index] !== undefined && this.table[index].key !== key) {
      index = index + (Math.pow(h, 2)) % this.size;
      h++;
    }

    return this.table[index];
  }
}
