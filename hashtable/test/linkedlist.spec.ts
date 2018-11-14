import { expect } from 'chai';
import LinkedList from '../src/implementers/linkedlist';
import { hash } from '../src/hash';

describe('Tests of LinkedList Implementer', () => {

  it('should insert a value to table', () => {
    const size: number = 20;
    const key: string = 'key-1';
    const hashIndex1: number = hash(key, size);
    const value1: string = 'value-1';
    const value2: string = 'value-2';
    const value3: string = 'value-3';
    const linearProbe = new LinkedList(size);

    const value1Index = linearProbe.insert(key, value1);
    const value2Index = linearProbe.insert(key, value2);
    const value3Index = linearProbe.insert(key, value3);

    expect(value1Index).not.to.equal(false);
    expect(value2Index).not.to.equal(false);
    expect(value3Index).not.to.equal(false);

    const table = linearProbe.getTable();

    let node1 = table[value1Index as number].head;
    expect(node1.data.key).to.equal(key);
    expect(node1.data.value).to.equal(value1);

    let node2 = table[value2Index as number].head.next;
    expect(node2.data.key).to.equal(key);
    expect(node2.data.value).to.equal(value2);

    let node3 = table[value3Index as number].head.next.next;
    expect(node3.data.key).to.equal(key);
    expect(node3.data.value).to.equal(value3);
  });

  it('should find the exists item', () => {
    const size: number = 20;
    const key1: string = 'key-1';
    const key2: string = 'key-2';
    const key3: string = 'key-3';
    const value1: string = 'value-1';
    const value2: string = 'value-2';
    const value3: string = 'value-3';

    const linearProbe = new LinkedList(size);
    linearProbe.insert(key1, value1);
    linearProbe.insert(key1, value2);
    linearProbe.insert(key2, value2);
    linearProbe.insert(key2, value3);
    linearProbe.insert(key3, value3);
    linearProbe.insert(key3, value1);

    const searchResult = linearProbe.search(key1);

    expect(true).to.equal(typeof(searchResult) === 'object');
    expect(key1).to.equal(searchResult.data.key);
    expect(value1).to.equal(searchResult.data.value);

    const emptySearchResult = linearProbe.search('empty');
    expect(true).to.equal(typeof(emptySearchResult) === 'undefined');
  });

  it('should resize hash table', () => {});
});
