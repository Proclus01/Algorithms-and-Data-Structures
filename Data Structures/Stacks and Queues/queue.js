class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        // Create a new node using that value passed to the function
        let newNode = new Node(value);
        // If there are no nodes in the queue, set this node to be the first and last property of the queue
        if (this.first === null) {
            this.first = newNode;
            this.last = newNode;
        } else {
            // Otherwise, set the next property on the current last to be that node, 
            // and then set the last property of the queue to be that node
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        // If there is no first property, just return null.
        if (this.first === null) return null;
        // Store the first property in a variable
        let temp = this.first;
        // See if the first is the same as the last (check if there is only 1 node),
        // if so, set the first and last to be null
        if (this.first === this.last) {
            this.last = null;
        } else {
            // If there is more than 1 node, set the first property to be the next property of first
            this.first = this.first.next;
            // Decrement the size by 1
            this.size--;
            // Return the value of the node to be dequeued
            return temp.value;
        }
    }
}

let q = new Queue();

q.enqueue("First");
q.enqueue("Second");
q.enqueue("Third");

console.log(
    q
)
console.log(
    q.dequeue(),
    q
)