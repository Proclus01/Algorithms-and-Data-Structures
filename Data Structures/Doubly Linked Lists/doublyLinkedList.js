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

    shift() {
        // If the length is 0, return undefined
        if (this.head === null) {
            return undefined;
        }
        // Store the current head property in a variable (we'll call it old head)
        let oldHead = this.head;
        // If the length is one, set the head to be null, and set the tail to be null
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else { // (You need this else block otherwise code inside will run when length is 1)
            // Update the head to be the next of the old head
            this.head = oldHead.next;
            // Set the head's prev property to null
            this.head.prev = null;
            // Set the old head's next to null
            oldHead.next = null;
        }
        // Decrement the length
        this.length--;
        // Return the old head
        return oldHead;
    }

    unshift(val) {
        // Create a new node with the value passed to the function
        let newNode = new Node(val);
        // If the length is 0, set the head to be the new node, set the tail to be the new node
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else { // Otherwise,
            // Set the prev property on the head of the list to be the new node
            this.head.prev = newNode;
            // Set the next property on the new node to be the head property
            newNode.next = this.head;
            // Update the head to be the new node
            this.head = newNode;
        }	
        // Increment the length	
        this.length++;
        // Return the list
        return this;	
    }

    get(index) {
        let counter, current;
        // If the index is less than 0 or greater or equal to the length, return null	
        if (index < 0 || index >= this.length) return null;
        // If the index is less than or equal to half the length of the list:
        if (index <= this.length / 2) {
            // Loop through the list starting from the head and loop towards the middle
            counter = 0;
            current = this.head;
    
            while (counter !== index) {
                current = current.next;
                counter++;
            }
        }	
        // If the index is greater than half the length of the list:	
        else {
            // Loop through the list starting from the tail and loop towards the middle
            counter = this.length - 1;
            current = this.tail;
    
            while (counter !== index) {
                current = current.prev;
                counter--;
            }

        }
        // Return the node once it is found
        return current;
    }
}

let list = new DoublyLinkedList();
list.push("doubly")
list.push("linked")
list.push("list")
list.push("again")
list.push("until")
list.push("the")
list.push("end")

console.log(
    list.get(0)
);