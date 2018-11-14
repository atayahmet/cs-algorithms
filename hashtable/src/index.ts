import HashTable from './hashtable';
import LinearProbe from './implementers/linearprobe';
import QuadraticProbe from './implementers/quadraticprobe';
import DoubleHash from './implementers/doublehash';
import LinkedList from './implementers/linkedlist';

const hashTable = new HashTable;

hashTable.use(new LinkedList(200));

hashTable.insert('adşldas', 'ahmet');
hashTable.insert('deneme-1', 'ahmet blaaa');
hashTable.insert('hebele-hubele', 'ahmet');
hashTable.insert('sümerr', 'ahmet 1');
hashTable.insert('süperr', 'ahmet 2');
hashTable.insert('ahmet-5', 'ahmet 3');
hashTable.insert('ahmet-6', 'ahmet 4');
hashTable.insert('ahmet 7', 'ahmet 5');
hashTable.insert('adşldas', 'ahmet 6');
// console.log(hashTable.search('adşldas'));
hashTable.resize(1000);
// console.log(hashTable.search('adşldas'));
hashTable.insert('sümerr', 'ahmet 1');
hashTable.insert('süperr', 'ahmet 2');
hashTable.insert('ahmet-5', 'ahmet 3');
hashTable.insert('ahmet-6', 'ahmet 4');
hashTable.insert('ahmet 7', 'ahmet 5');
hashTable.insert('adşldas', 'ahmet 6');

// hashTable.insert('ismail', 'ismail');

// hashTable.resize(200);

// for (let i = 100; i < 200; i++) {
//   hashTable.insert('hello'+i, 'Lorem '+i);
// }

// console.log(hashTable.getTable());
// console.log(hashTable.getTable()[56]);

console.log(hashTable.getTable());
// console.log('search: hello7', hashTable.search('hello7'));
// console.log('search: hello30', hashTable.search('hello30'));
// let end = Date.now();

// console.log((end - start) / 1000);
