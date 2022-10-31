class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        // Create a new node
        let newNode = new Node(value);
        // Start at the root
        // Check if there is a root - if not, the root now becomes that new node!
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            // If there is a root, check if the value of the new node is greater than
            // or less than the value of the root
            while (true) {
                // Edge case: inserting a duplicate should return undefined
                if (value === current.value) return undefined;
                // If it is less than:
                if (value < current.value) {
                    // Check to see if there is a node to the left:
                    if (current.left === null) {
                        // If there is, move to that node and repeat these steps
                        // If there is not, add that node as the left property
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                // If it is greater:
                } else if (value > current.value) {
                // Check if there is a node to the right:
                if (current.right === null) {
                    // If there is not, add that node as the right property
                    current.right = newNode;
                    return this;
                } else {
                    // If there is, move to that node and repeat those steps
                    current = current.right;
                    }
                }
            }
        }
    }

    find(value) {
        // Starting at the root:
        // Check if there is a root, if not then we're done searching!
        if (this.root === null) return false;
        let current = this.root;
        let found = false;
        
        // While there is something to loop over and we haven't found it
        while (!found && current) { 
            // Check to see if the value is greater than or less than the value of the current
            // If it is less, update current to be the left side
            if (value < current.value) {
                current = current.left;
            // If it is greater, then update current to be the right side
            } else if (value > current.value) {
                current = current.right;
            // But if it's equal to what we're looking for, then we're done!
            } else {
                found = true;
            }
        }
        if (!found) return false;
        return current;
    }
}

var tree = new BinarySearchTree();