import { expect } from 'chai';
import Queue from './../src/queue';

describe('Queue tests', () => {
  it('should return whether the queue is empty', () => {
    const queue = new Queue;

    expect(queue.isEmpty()).to.equal(true);

    queue.add(1);
    expect(queue.isEmpty()).to.equal(false);

    queue.add(2);
    queue.add(3);

    queue.remove();
    expect(queue.isEmpty()).to.equal(false);

    queue.remove();
    queue.remove();
    expect(queue.isEmpty()).to.equal(true);
  });

  it('should get the peek data of queue of head', () => {
    const queue = new Queue;

    expect(queue.peek()).to.equal(null);

    queue.add(1);
    expect(queue.peek()).to.equal(1);

    queue.add(2);
    queue.remove();
    expect(queue.peek()).to.equal(2);

    queue.remove();
    expect(queue.peek()).to.equal(null);
  });

  it('should be add the data to the queue', () => {
    const queue = new Queue;

    expect(queue.isEmpty()).to.equal(true);

    queue.add(1);
    expect(queue.isEmpty()).to.equal(false);
    expect(queue.peek()).to.equal(1);
  });

  it('should remove the next queue data', () => {
    const queue = new Queue;

    expect(queue.isEmpty()).to.equal(true);
    queue.add(1);
    queue.add(2);

    expect(queue.peek()).to.equal(1);

    expect(queue.remove()).to.equal(1);
    expect(queue.peek()).to.equal(2);

    expect(queue.remove()).to.equal(2);
    expect(queue.isEmpty()).to.equal(true);
  });
});
