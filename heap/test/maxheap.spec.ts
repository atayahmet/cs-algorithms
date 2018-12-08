import { expect } from 'chai';
import MaxHeap from '../src/maxheap';

describe('Max Heap tests', () => {

  it('should sort from max to min when a new value has insert', () => {
    const heap = new MaxHeap;

    heap.insert(3);
    heap.insert(1);
    heap.insert(5);

    let box = heap.getHeapBox();
    expect(box[1]).to.equal(1);

    heap.insert(4);
    heap.insert(7);

    box = heap.getHeapBox();
    expect(box[1]).to.equal(5);

    heap.insert(2);
    heap.insert(6);

    box = heap.getHeapBox();
    expect(box[0]).to.equal(7);
    expect(box[2]).to.equal(6);
    expect(box[5]).to.equal(2);
  });

  it('should sort from max to min when a value has poll', () => {
    const heap = new MaxHeap;

    heap.insert(3);
    heap.insert(1);
    heap.insert(5);
    heap.insert(4);
    heap.insert(7);

    let box = heap.getHeapBox();
    expect(box[2]).to.equal(3);

    expect(heap.poll()).to.equal(7);
    box = heap.getHeapBox();
    expect(box[2]).to.equal(4);

    expect(heap.poll()).to.equal(5);
    expect(box[2]).to.equal(1);
  });
});

