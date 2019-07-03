import PriorityQueue from './priority-queue';

const queue = new PriorityQueue;

queue.enqueue(8, {title: 'Job 1'});
queue.enqueue(7, {title: 'Job 2'});
queue.enqueue(6, {title: 'Job 3'});
queue.enqueue(3, {title: 'Job 4'});
queue.enqueue(1, {title: 'Job 5'});
queue.enqueue(4, {title: 'Job 6'});
queue.enqueue(4, {title: 'Job 7'});
queue.enqueue(4, {title: 'Job 8'});
queue.enqueue(4, {title: 'Job 9'});

// heapify.insert(2, {name: 'Ahmet'});
// heapify.insert(3, {name: 'Ahmet'});
// heapify.insert(4, {name: 'Ahmet'});
// heapify.insert(26, {name: 'Ahmet'});

// console.log('poll -->', heapify.poll(), "\n");
// console.log('poll -->', heapify.poll(), "\n");
// console.log('poll -->', heapify.poll(), "\n");
// console.log('poll -->', heapify.poll(), "\n");


while (!queue.isEmpty()) {
  queue.dequeue();
}

// heapify.poll()
console.log(queue);


                          //                             8
                          //           7                                   6
                          //     4       1                           4             4
                          // 3     4
