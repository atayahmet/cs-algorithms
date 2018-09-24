import { expect } from 'chai';
import Stack from './../src/stack';

describe('Stack tests', () => {
  it('should return whether the queue is empty', () => {
    const stack = new Stack;

    expect(stack.isEmpty()).to.equal(true);

    stack.push(1);
    expect(stack.isEmpty()).to.equal(false);

    stack.push(2);
    stack.push(3);

    stack.pop();
    expect(stack.isEmpty()).to.equal(false);

    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).to.equal(true);
  });

  it('should get the peek data of queue of head', () => {
    const stack = new Stack;

    expect(stack.peek()).to.equal(null);

    stack.push(1);
    expect(stack.peek()).to.equal(1);

    stack.push(2);
    expect(stack.peek()).to.equal(2);

    stack.pop();
    stack.pop();
    expect(stack.peek()).to.equal(null);
  });

  it('should be add the data to the stack', () => {
    const stack = new Stack;

    expect(stack.isEmpty()).to.equal(true);

    stack.push(1);
    expect(stack.isEmpty()).to.equal(false);
    expect(stack.peek()).to.equal(1);
  });

  it('should pop the next queue data', () => {
    const stack = new Stack;

    expect(stack.isEmpty()).to.equal(true);
    stack.push(1);
    stack.push(2);

    expect(stack.peek()).to.equal(2);
    expect(stack.pop()).to.equal(2);
    expect(stack.peek()).to.equal(1);

    expect(stack.pop()).to.equal(1);
    expect(stack.isEmpty()).to.equal(true);
  });
});
