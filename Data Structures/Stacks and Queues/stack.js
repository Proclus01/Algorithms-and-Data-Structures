class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        // Create a new node with that value
        let newNode = new Node(value);
        // If there are no nodes in the stack, set the first 
        // and last property to be the newly created node
        if (this.first === null) {
            this.first = newNode;
            this.last = newNode;
        } else {
            // If there is at least one node, create a variable that 
            // stores the current first property on the stack
            let temp = this.first;
            // Reset the first property to be the newly created node
            this.first = newNode;
            // Set the next property on the node to be the previously created variable
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop() {
        // If there are no nodes in the stack, return null
        if (this.first === null) return null;
        // Create a temporary variable to store the first property on the stack
        let temp = this.first;
        // If there is only 1 node, set the first and last property to be null
        if (this.first === this.last) {
            this.last = null;
        }
        // If there is more than one node, set the first property 
        // to be the next property on the current first
        this.first = this.first.next;
        // Decrement the size by 1
        this.size--;
        // Return the value of the removed node
        return temp.value;
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());