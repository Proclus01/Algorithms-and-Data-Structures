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
}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("Goodbye for real this time")

console.log(
    list.set(2, "hello again"),
    list.tail
)