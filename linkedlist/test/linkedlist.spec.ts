import { expect } from 'chai';
import LinkedList from '../src/linkedlist';

describe('LinkedList class methods tests', () => {

  it('should insert a value to end of the list', () => {
    const linkedlist = new LinkedList;
    linkedlist.append(1);
    expect(linkedlist.head.data).to.equal(1);

    linkedlist.append(2);
    expect(linkedlist.head.next.data).to.equal(2);

    linkedlist.append(3);
    expect(linkedlist.head.next.next.data).not.equal(2);
  });

  it('should insert a value to start of the list', () => {
    const linkedlist = new LinkedList;
    linkedlist.prepend(1);
    expect(linkedlist.head.data).to.equal(1);

    linkedlist.prepend(2);
    expect(linkedlist.head.data).to.equal(2);

    linkedlist.prepend(3);
    expect(linkedlist.head.data).not.equal(2);
  });

  it('should remove a value on list by a value', () => {
    const linkedlist = new LinkedList;
    linkedlist.append(1);
    linkedlist.append(2);
    linkedlist.append(3);

    expect(linkedlist.head.next.data).to.equal(2);

    linkedlist.deleteWithValue(2);
    expect(linkedlist.head.next.data).not.equal(2);
  });
});
