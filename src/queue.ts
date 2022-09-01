interface IQueueInterface<T> {
    enqueue(item: T): void
    dequeue(): T | undefined
    size(): number
}

abstract class QueueCollection<T> {
    protected queue: T[] = [];
  
    size(): number {
      return this.queue.length - 1;
    }
}

class Queue<T> extends QueueCollection<T> implements IQueueInterface<T> {
    
    enqueue(item: T): void {
      this.queue.push(item);
    }
    dequeue(): T | undefined {
      return this.queue.shift();
    }
    getQueue(): any[] {
        return this.queue
    }
}

const queue = new Queue();

queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");

console.log(queue.dequeue())
console.log(queue.getQueue())
console.log(queue.size())