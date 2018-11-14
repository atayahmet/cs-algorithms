import ImplementerInterface from './implementer.interface';
import HashTableInterface from './hashtable.interface';

export default class HashTable {
  protected implementer: ImplementerInterface;

  public insert(key: string, value: any): boolean|number {
    return this.implementer.insert(key, value);
  }

  public search(key: string): any {
    return this.implementer.search(key);
  }

  public use(implementer: ImplementerInterface) {
    this.implementer = implementer;
  }

  public resize(size: number): void {
    this.implementer.resize(size);
  }

  public getTable(): any {
    return this.implementer.getTable();
  }
}
