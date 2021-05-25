const Queue = require("./Queue");

let myQueue = new Queue();

myQueue.enqueue(999)
myQueue.enqueue(1)
myQueue.enqueue(2)
console.log(myQueue.peek());
myQueue.printQueue();
myQueue.dequeue();
myQueue.enqueue(3)
myQueue.enqueue(4)
myQueue.printQueue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();



console.log(myQueue);



