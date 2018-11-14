import HashTableInterface from './hashtable.interface';
export default interface ImplementerInterface {
  insert(key: string, value: any): boolean|number;
  search(key: string): any;
  resize(size: number): void;
  getTable(): any;

}
