// piece of data - val
// reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// PRIMITIVE LINKED LIST INTERPRETATION IS COMMENTED

// let first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        // Create a new node using the value passed to the function
        let newNode = new Node(val);

        // If there is no head property on the list, 
        // set the head and tail to be the newly created node
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } 
        // Otherwise set the next property on the tail to be the new node
        // and set the tail property on the list to be the newly created node
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        // Increment the length by one
        this.length++;
        // Return the linked list
        return this;
    }

    pop() {
        // If there are no nodes in the list, return undefined
        if (this.length === 0) {
            return undefined;
        }

        let current = this.head;
        let newTail = current;

        // Loop through the list until you reach the value just before the tail
        while(current.next) {
            // newTail is always lagging by 1
            newTail = current;
            current = current.next;
        }

        // Set the tail to be the 2nd to last node
        this.tail = newTail;

        // Set the next property of the 2nd to last node to be null
        this.tail.next = null;

        // Decrement the length of the list by 1
        this.length--;

        // Edge case: when there's just a head, then set both head and tail to null
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        // Return the value of the node removed
        return current;
    }

    shift() {
        // If there are no nodes, return undefined
        if (!this.head) {
            return undefined;
        }

        // Store the current head property in a variable
        let currentHead = this.head;

        // Set the head property to be the current head's next property
        this.head = currentHead.next;

        // Decrement the length by 1
        this.length--;

        // Edge case: when there's just a tail, then set both head and tail to null
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        // Return the value of the node removed
        return currentHead;
    }

    unshift(val) {
        // Create a new node using the value passed to the function
        let newNode = new Node(val);

        // If there is no head property on the list, 
        // set the head and tail to be the newly created node
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        // Otherwise set the newly created node's next property 
        // to be the current head property on the list
        else {
            newNode.next = this.head;
        }

        // Set the head property on the list to be that newly created node
        this.head = newNode;

        // Increment the length of the list
        this.length++;

        // Return the linked list
        return this;
    }

    get(index) {
        // If the index is less than zero or greater 
        // than or equal to the length of the list, return null
        if (index < 0 || index >= this.length) {
            return null;
        }
        
        // Loop through the list until you reach the index 
        let counter = 0;
        let current = this.head;

        while (counter !== index) {
            current = current.next;
            counter++;
        }

        // and return the node at that specific index
        return current;
    }

    set(index, value) {
        // Use the get function to find the specific node
        let foundNode = this.get(index);
        // If the node is found, set the value of that node to be the value 
        // passed to the function, and return true
        if (foundNode) {
            foundNode.val = value;
            return true;
        }
        // If the node is not found, return false
        return false;
    }

    insert(index, value) {
        // If the index is less than zero or greater than the length, return false
        if (index < 0 || index > this.length) {
            return false;
        }
        // If the index is the same as the length, push a new node to the end of the list
        if (index === this.length) {
            this.push(value);
            return true;
        }
        // If the index is 0, unshift a new node to the start of the list
        if (index === 0) {
            this.unshift(value);
            return true;
        }
        // Otherwise, using the get method, access the node at the (index - 1)
        let prevNode = this.get(index - 1);
        // Create the new node
        let newNode = new Node(value);
        // Get the next node after prevNode
        let nextNode = this.get(index);
        // Set the property on the new node to be the previous next
        newNode.next = prevNode.next;
        // Set the next property on the previous node to be the new node
        prevNode.next = newNode;
        // Set the previous.next to be the new node
        newNode.next = nextNode;
        // Increment the length
        this.length++;
        // Return true
        return true;
    }

    remove(index) {
        // If the index is less than zero or greater than the length, return undefined
        if (index < 0 || index > this.length) {
            return undefined;
        }
        // If the index is the same as length - 1, then pop
        if (index === this.length - 1) {
            return this.pop();
        }
        // If the index is 0, shift
        if (index === 0) {
            return this.shift();
        }
        // Otherwise, using the get method, access the node at the index - 1
        let prevNode = this.get(index - 1);
        let removedNode = this.get(index);
        let nextNode = removedNode.next;
        // Set the next property on that node to be the next of the next node
        prevNode.next = nextNode;
        // Decrement the length
        this.length--;
        // Return the value of the node removed
        return removedNode;
    }

    reverse() {
        // Create a variable called node and initialize it to the head property
        let node = this.head;
        // Swap the head and the tail
        this.head = this.tail;
        this.tail = node;
        // Create a variable called next
        let next;
        // Create a variable called prev, and set to null for the tail of the list
        let prev = null;
        // Loop through the list
        for (let i = 0; i < this.length; i++) {
            // Set next to be the next property on whatever node is
            next = node.next;
            // Set the next property on the node to be whatever prev is
            node.next = prev;
            // Set the prev to be the value of the node variable
            prev = node;
            // Set the node variable to be the value of the next variable
            node = next;
        }
        return this;
    }
}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("Goodbye for real this time")

console.log(
    list.reverse(),
    list.tail
)