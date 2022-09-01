"use strict";
class QueueCollection {
    constructor() {
        this.queue = [];
    }
    size() {
        return this.queue.length - 1;
    }
}
class Queue extends QueueCollection {
    enqueue(item) {
        this.queue.push(item);
    }
    dequeue() {
        return this.queue.shift();
    }
    getQueue() {
        return this.queue;
    }
}
const queue = new Queue();
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");
console.log(queue.dequeue());
console.log(queue.getQueue());
console.log(queue.size());
