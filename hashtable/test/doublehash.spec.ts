import { expect } from 'chai';
import DoubleHash from '../src/implementers/doublehash';
import { hash } from '../src/hash';

const double = (hash1, hash2, size, i) => (hash1 + i * hash2) % size;

describe('Tests of DoubleHash Implementer', () => {

  it('should insert a value to table', () => {
    const size: number = 20;
    const key: string = 'key-1';
    const hash1: number = hash(key, size);
    const hash2: number = hash(key, size);
    const value1: string = 'value-1';
    const value2: string = 'value-2';
    const value3: string = 'value-3';
    const doubleHash = new DoubleHash(size);

    const value1Index = doubleHash.insert(key, value1);
    const value2Index = doubleHash.insert(key, value2);
    const value3Index = doubleHash.insert(key, value3);

    expect(value1Index).not.to.equal(false);
    expect(value2Index).not.to.equal(false);
    expect(value3Index).not.to.equal(false);

    let i: number = 0;
    let isValue1Match: boolean = false;
    let isValue2Match: boolean = false;
    let isValue3Match: boolean = false;

    while(isValue1Match === false && i <= size) {
      isValue1Match = value1Index === double(hash1, hash2, size, i);
      i++;
    }

    expect(isValue1Match).to.equal(true);

    i = 0;
    while(isValue2Match === false && i <= size) {
      isValue2Match = value2Index === double(hash1, hash2, size, i);
      i++;
    }

    expect(isValue2Match).to.equal(true);

    i = 0;
    while(isValue3Match === false && i <= size) {
      isValue3Match = value3Index === double(hash1, hash2, size, i);
      i++;
    }

    expect(isValue3Match).to.equal(true);

    const table = doubleHash.getTable();
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

    const doubleHash = new DoubleHash(size);
    doubleHash.insert(key1, value1);
    doubleHash.insert(key1, value2);
    doubleHash.insert(key2, value2);
    doubleHash.insert(key2, value3);
    doubleHash.insert(key3, value3);
    doubleHash.insert(key3, value1);

    const searchResult = doubleHash.search(key1);

    expect(true).to.equal(typeof(searchResult) === 'object');
    expect(key1).to.equal(searchResult.key);
    expect(value1).to.equal(searchResult.value);

    const emptySearchResult = doubleHash.search('empty');
    expect(true).to.equal(typeof(emptySearchResult) === 'undefined');
  });

  it('should resize hash table', () => {
    const size: number = 20;

    const doubleHash = new DoubleHash(size);

    for (let i = 0; i<= 100; i++) {
      doubleHash.insert(`key-${i}`, `value-${i}`);
    }

    expect(true).to.equal(Object.keys(doubleHash.getTable()).length < 21);

    doubleHash.resize(100);

    for (let i = 0; i<= 100; i++) {
      doubleHash.insert(`key-${i}`, `value-${i}`);
    }

    expect(true).to.equal(Object.keys(doubleHash.getTable()).length > 20);
  });
});
