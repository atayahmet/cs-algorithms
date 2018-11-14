import { expect } from 'chai';
import QuadraticProbe from '../src/implementers/quadraticprobe';
import { hash } from '../src/hash';

const power = (hash, size, index) => (hash + Math.pow(index, 2)) % size;

describe('Tests of QuadraticProbe Implementer', () => {

  it('should insert a value to table', () => {
    const size: number = 20;
    const key: string = 'key-1';
    const hashIndex: number = hash(key, size);
    const value1: string = 'value-1';
    const value2: string = 'value-2';
    const value3: string = 'value-3';
    const doubleHash = new QuadraticProbe(size);

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
      isValue1Match = value1Index === power(hashIndex, size, i);
      i++;
    }

    expect(isValue1Match).to.equal(true);

    i = 0;
    while(isValue2Match === false && i <= size) {
      isValue2Match = value2Index === power(hashIndex, size, i);
      i++;
    }

    expect(isValue2Match).to.equal(true);

    i = 0;
    while(isValue3Match === false && i <= size) {
      isValue3Match = value3Index === power(hashIndex, size, i);
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

    const quadraticProbe = new QuadraticProbe(size);
    quadraticProbe.insert(key1, value1);
    quadraticProbe.insert(key1, value2);
    quadraticProbe.insert(key2, value2);
    quadraticProbe.insert(key2, value3);
    quadraticProbe.insert(key3, value3);
    quadraticProbe.insert(key3, value1);

    const searchResult = quadraticProbe.search(key1);

    expect(true).to.equal(typeof(searchResult) === 'object');
    expect(key1).to.equal(searchResult.key);
    expect(value1).to.equal(searchResult.value);

    const emptySearchResult = quadraticProbe.search('empty');
    expect(true).to.equal(typeof(emptySearchResult) === 'undefined');
  });

  it('should resize hash table', () => {
    const size: number = 20;

    const quadraticProbe = new QuadraticProbe(size);

    for (let i = 0; i<= 100; i++) {
      quadraticProbe.insert(`key-${i}`, `value-${i}`);
    }

    expect(true).to.equal(Object.keys(quadraticProbe.getTable()).length < 21);
    quadraticProbe.resize(100);

    for (let i = 0; i<= 100; i++) {
      quadraticProbe.insert(`key-${i}`, `value-${i}`);
    }

    expect(true).to.equal(Object.keys(quadraticProbe.getTable()).length > 20);
  });
});
