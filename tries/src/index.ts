import TrieNode from './node';

const node = new TrieNode;


node.insert('ahmet');
node.insert('arife gunu');
node.insert('arife gunu neredeydiniz');
node.insert('arif');



// console.log(node.getRoot().nodes['a'].nodes['r'].nodes['i'].nodes['f'].isEnd());


console.log(node.search('arife gunu '));
