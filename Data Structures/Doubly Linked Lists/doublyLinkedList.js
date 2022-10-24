class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        // Create a new node with the value passed to the function
        let newNode = new Node(val);
        // If the head property is null, set the head and tail to be the newly created node
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If not, set the next property on the tail to be that node
            this.tail.next = newNode;
            // Set the previous property on the newly created node to be the tail
            newNode.prev = this.tail;
            // Set the tail to be the newly created node
            this.tail = newNode;
        }
        // Increment the length
        this.length++;
        // Return the Doubly Linked List
        return this;
    }

    pop() {
        // If there is no head, return undefined
        if (this.head === null) {
            return undefined;
        }
        // Store the current tail in a variable to return later
        let oldTail = this.tail;
        // If the length is 1, set the head and the tail to be null
        if (this.length === 1) {
            this.head === null;
            this.tail === null;
        } else {
            // Update the tail to be the previous Node
            this.tail = oldTail.prev;
            // Set the new Tail's next to null
            this.tail.next = null;
            // Set the old tail's previous to be null
            oldTail.prev = null;
        }
        // Decrement the length
        this.length--;
        // Return the value removed 
        return oldTail;
    }
}

let list = new DoublyLinkedList();
list.push("doubly")
list.push("linked")
list.push("list")


console.log(
    list
);