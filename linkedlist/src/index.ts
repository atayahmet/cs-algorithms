import LinkedList from './linkedlist';


const linkedlist = new LinkedList;

linkedlist.append(1);
console.log('append:insert 1', linkedlist.head);

linkedlist.prepend(2);
console.log('prepend:insert 2', linkedlist.head);

linkedlist.prepend(3);
console.log('prepend:insert 3', linkedlist.head);

linkedlist.append(11);
console.log('append:insert 4', linkedlist.head);


linkedlist.deleteWithValue(2);
console.log('delete:11', linkedlist.head);
