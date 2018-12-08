import Heap from './heap';
import MinHeap from './minheap';
import MaxHeap from './maxheap';

const heap = new MaxHeap;

heap.insert(3);
heap.insert(1);
heap.insert(14);
heap.insert(7);
heap.insert(8);
heap.insert(18);
heap.insert(40);
heap.insert(24);
heap.insert(32);
heap.insert(98);
heap.insert(21);
heap.insert(99);
heap.insert(100);
heap.insert(400);
heap.insert(2);
heap.insert(303);
heap.insert(80);
heap.insert(78);
heap.insert(229);
heap.insert(95);
heap.insert(111);


// console.log(heap);

// console.log(heap.poll());
// console.log(heap.poll());
// console.log(heap.poll());


                        //                                 1
                        //                 3                               2
                        //           7             8                 18              14
                        //     24          32    95       21    99  100     400     40      303
                        // 80      78  229     98  111





    //                     400
    //         303                     100
    //     229     111             98        99
    // 40      80 95   21        3     18  14    2
