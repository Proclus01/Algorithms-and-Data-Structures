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
        // If the index is less than 0 or greater or equal to the length, return null	
        if (index < 0 || index >= this.length) return null;
        let counter, current;
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

    set(index, value) {
        // Create a variable which is the result of the get method 
        // at the index passed to the function
        let nodeToUpdate = this.get(index);
        // If the get method returns a valid node, set the value of 
        // that node to be the value passed to the function
        if (nodeToUpdate) {
            nodeToUpdate.val = value;
            // Return true
            return true;
        } else {
            // Otherwise, return false
            return false;
        }
    }

    insert(index, value) {
        // If the index is less than zero or greater than the length return false (bc we can add at end)
        if (index < 0 || index > this.length) return false;
        // If the index is 0, use unshift
        if (index === 0) {
            return !!this.unshift(value);
        }
        // If the index is the same as the length, push
        if (index === this.length) {
            return !!this.push(value);
        }
        // Otherwise use the get method to access the index - 1 
        // (right before where we're trying to insert)
        let valueBeforeIndex = this.get(index - 1);
        let valueAfterIndex = valueBeforeIndex.next;
        let valueToInsert = new Node(value);
        // Set the next and prev properties on the correct nodes to link everything together
        valueBeforeIndex.next = valueToInsert;
        valueToInsert.prev = valueBeforeIndex;
        valueToInsert.next = valueAfterIndex;
        valueAfterIndex.prev = valueToInsert;
        // Increment the length
        this.length++;
        // Return true
        return true;
    }

    remove(index) {
        // If the index is less than zero or greater than or equal to the length, return undefined
        if (index < 0 || index >= this.length) return undefined;
        // If the index is 0, then shift
        if (index === 0) {
            return this.shift();
        }
        // If the index is the same as the length-1, then pop
        if (index === this.length - 1) {
            return this.pop();
        }
        // Use the get method to retrieve the item to be removed
        let itemToBeRemoved = this.get(index);
        let prevItem = this.get(index - 1);
        let nextItem = this.get(index + 1);
        // Update the next and prev properties to remove the found node from the list
        prevItem.next = nextItem;
        nextItem.prev = prevItem;
        // Set the next and prev to null on the found node
        itemToBeRemoved.prev = null;
        itemToBeRemoved.next = null;
        // Decrement the length
        this.length--;
        // Return the removed node
        return itemToBeRemoved;
    }

    reverse() {

    }
}

let list = new DoublyLinkedList();
list.push("doubly")
list.push("linked")
list.push("list")

console.log(
    list.remove(1),
    list
);