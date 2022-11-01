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

    breadthFirstSearch() {
        // Create a queue (this can be an array)
        let queue = [];
        // and a variable to store the values of nodes visited.
        let data = [];
        let node = this.root;
        // Place the root node in the queue.
        queue.push(node);
        // Loop as long as there is anything in the queue
        while (queue.length) {
            // 	Dequeue a node from the queue and push the value
            // 	of the node into the variable that stores the nodes
            node = queue.shift();
            data.push(node.value);
            // 	If there is a left property on the node dequeued, add it to the queue
            if (node.left) queue.push(node.left);
            // 	If there is a right property on the node dequeued, add it to the queue
            if (node.right) queue.push(node.right);
        }
        // Return the variable that stores the values
        return data;
    }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.breadthFirstSearch()); // [ 10, 6, 15, 3, 8, 20 ]
