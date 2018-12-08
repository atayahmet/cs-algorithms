import { expect } from 'chai';
import MinHeap from '../src/minheap';

describe('Min Heap tests', () => {

  it('should sort from min to max when a new value has insert', () => {
    const heap = new MinHeap;

    heap.insert(3);
    heap.insert(1);
    heap.insert(5);

    let box = heap.getHeapBox();
    expect(box[1]).to.equal(3);

    heap.insert(2);
    heap.insert(7);

    box = heap.getHeapBox();
    expect(box[1]).to.equal(2);
    expect(box[4]).to.equal(7);

    [1, 2, 5, 3, 7].forEach((val, i) => expect(box[i]).to.equal(val));
  });

  it('should sort from min to max when a value has poll', () => {
    const heap = new MinHeap;

    heap.insert(3);
    heap.insert(1);
    heap.insert(5);
    heap.insert(4);
    heap.insert(7);

    let box = heap.getHeapBox();
    expect(box[2]).to.equal(5);

    expect(heap.poll()).to.equal(1);

    box = heap.getHeapBox();
    expect(box[2]).to.equal(5);

    expect(heap.poll()).to.equal(3);
    expect(box[2]).to.equal(7);
  });
});
