import Queue from './queue';

const queue = new Queue;

console.log(queue.isEmpty());

queue.add(1);
queue.add(2);
queue.add(3);

console.log(queue.peek());
console.log('remove->', queue.remove());

console.log(queue.peek());
console.log('remove->', queue.remove());

console.log(queue.peek());
console.log('remove->', queue.remove());

console.log(queue.peek());
