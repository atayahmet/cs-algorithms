import { expect } from 'chai';
import PriorityQueue from '../src/priority-queue';

describe('Max Heap tests', () => {

  const queue = new PriorityQueue;

  it('should add new job to queue by priority value', () => {
    queue.clear();
    expect(queue.count()).eq(0);
    queue.enqueue(3, {title: 'Job 1'});
    queue.enqueue(1, {title: 'Job 2'});
    queue.enqueue(2, {title: 'Job 3'});
    expect(queue.count()).eq(3);
  });

  it('should take a job from queue of peak item', () => {
    queue.clear();
    expect(queue.count()).eq(0);

    queue.enqueue(3, {title: 'Job 1'});
    queue.enqueue(1, {title: 'Job 2'});
    queue.enqueue(2, {title: 'Job 3'});
    queue.enqueue(7, {title: 'Job 5'});
    queue.enqueue(6, {title: 'Job 6'});

    expect(queue.dequeue().title).eq('Job 5');
    expect(queue.count()).eq(4);

    expect(queue.dequeue().title).eq('Job 6');
    expect(queue.count()).eq(3);

    expect(queue.dequeue().title).eq('Job 1');
    expect(queue.count()).eq(2);
  });

  it('should return the job count', () => {
    queue.clear();

    expect(queue.count()).eq(0);
    queue.enqueue(7, {title: 'Job 1'});

    expect(queue.count()).eq(1);

    queue.enqueue(10, {title: 'Job 2'});
    queue.enqueue(11, {title: 'Job 3'});
    expect(queue.count()).eq(3);
    queue.clear();
  });

  it('should clear all jobs', () => {
    expect(queue.count()).eq(0);

    queue.enqueue(8, {title: 'Job 1'});
    queue.enqueue(12, {title: 'Job 2'});
    expect(queue.count()).eq(2);

    queue.clear();
    expect(queue.count()).eq(0);
  });

  it('if queue is empty, should return true', () => {
    expect(queue.count()).eq(0);
    expect(queue.isEmpty()).eq(true);

    queue.enqueue(8, {title: 'Job 1'});
    queue.enqueue(12, {title: 'Job 2'});
    expect(queue.isEmpty()).eq(false);

    queue.dequeue();
    expect(queue.isEmpty()).eq(false);

    queue.dequeue();
    expect(queue.isEmpty()).eq(true);
  });
});
