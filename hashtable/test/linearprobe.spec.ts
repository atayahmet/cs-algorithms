import { expect } from 'chai';
import LinearProbe from '../src/implementers/linearprobe';
import { hash } from '../src/hash';

const power = (hash, size, index) => (hash + Math.pow(index, 2)) % size;

describe('Tests of LinearProbe Implementer', () => {

  it('should insert a value to table', () => {
    const size: number = 20;
    const key: string = 'key-1';
    const hashIndex1: number = hash(key, size);
    const value1: string = 'value-1';
    const value2: string = 'value-2';
    const value3: string = 'value-3';
    const linearProbe = new LinearProbe(size);

    const value1Index = linearProbe.insert(key, value1);
    const value2Index = linearProbe.insert(key, value2);
    const value3Index = linearProbe.insert(key, value3);

    expect(value1Index).not.to.equal(false);
    expect(value2Index).not.to.equal(false);
    expect(value3Index).not.to.equal(false);

    let i: number = 0;
    let isValue1Match: boolean = false;
    let isValue2Match: boolean = false;
    let isValue3Match: boolean = false;

    while(isValue1Match === false && i <= size) {
      isValue1Match = value1Index === (hashIndex1 + i) % size;
      i++;
    }

    expect(isValue1Match).to.equal(true);

    i = 0;
    while(isValue2Match === false && i <= size) {
      isValue2Match = value2Index === (hashIndex1 + i) % size;
      i++;
    }

    expect(isValue2Match).to.equal(true);

    i = 0;
    while(isValue3Match === false && i <= size) {
      isValue3Match = value3Index === (hashIndex1 + i) % size;
      i++;
    }

    expect(isValue3Match).to.equal(true);

    const table = linearProbe.getTable();
    const index = typeof(value1Index) !== 'boolean' ? value1Index as number : null;

    expect(table[value1Index as number].key).to.equal(key);
    expect(table[value1Index as number].value).to.equal(value1);

    expect(table[value2Index as number].key).to.equal(key);
    expect(table[value2Index as number].value).to.equal(value2);

    expect(table[value3Index as number].key).to.equal(key);
    expect(table[value3Index as number].value).to.equal(value3);
  });

  it('should find the exists item', () => {
    const size: number = 20;
    const key1: string = 'key-1';
    const key2: string = 'key-2';
    const key3: string = 'key-3';
    const value1: string = 'value-1';
    const value2: string = 'value-2';
    const value3: string = 'value-3';

    const linearProbe = new LinearProbe(size);
    linearProbe.insert(key1, value1);
    linearProbe.insert(key1, value2);
    linearProbe.insert(key2, value2);
    linearProbe.insert(key2, value3);
    linearProbe.insert(key3, value3);
    linearProbe.insert(key3, value1);

    const searchResult = linearProbe.search(key1);

    expect(true).to.equal(typeof(searchResult) === 'object');
    expect(key1).to.equal(searchResult.key);
    expect(value1).to.equal(searchResult.value);

    const emptySearchResult = linearProbe.search('empty');
    expect(true).to.equal(typeof(emptySearchResult) === 'undefined');
  });

  it('should resize hash table', () => {
    const size: number = 20;

    const linearProbe = new LinearProbe(size);

    for (let i = 0; i<= 100; i++) {
      linearProbe.insert(`key-${i}`, `value-${i}`);
    }

    expect(true).to.equal(Object.keys(linearProbe.getTable()).length === 20);
    linearProbe.resize(100);

    for (let i = 0; i<= 100; i++) {
      linearProbe.insert(`keyx-${i}`, `value-${i}`);
    }

    expect(true).to.equal(Object.keys(linearProbe.getTable()).length == 100);
  });
});
