import ImplementerInterface from '../implementer.interface';
import HashTableInterface from '../hashtable.interface';
import { hash } from '../hash';

export default class DoubleHash implements ImplementerInterface {
  protected table: HashTableInterface = {}
  protected size: number = 20;

  constructor(size: number) {
    this.resize(size || this.size);
  }

  public insert(key: string, value: any): boolean|number {
    // generate hash via passed key
    let index: number = hash(key, this.size);

    // generate second hash via passed key
    let index2: number = hash(key, this.size);
    let h = 0;

    // iterate the all rows in table
    while (this.table[index] !== undefined && h <= this.size) {

      // generate double hash
      index = (index + h * index2) % this.size;
      h++;

      // if loop count great than hash table size
      // stop the loop and return false.
      if (h > this.size) {
        return false;
      }
    }

    // push new data
    this.table[index] = { key, value };

    return index;
  }

  public search(key: string): any {
    // generate hash via passed key
    let index = hash(key, this.size);

    // generate second hash via passed key
    let indexH = hash(key, this.size);
    let h = 0;

    while (this.table[index] !== undefined && this.table[index].key !== key) {
      // make double hash
      index = (index + h * indexH) % this.size;
      h++;
    }

    return this.table[index];
  }

  public resize(size: number): void {
    // assign the new size of table
    this.size = size;

     // clone hash table to new local variablle
    const table = { ...this.table };

    // set empty object
    this.table = {};

    // iterate the all rows
    for (const hash of Object.keys(table)) {
       // get key and value
      const { key, value } = table[hash];

      // re-send key and value to hash table
      this.insert(key, value);
    }
  }

  public getTable(): HashTableInterface {
    return this.table;
  }
}
