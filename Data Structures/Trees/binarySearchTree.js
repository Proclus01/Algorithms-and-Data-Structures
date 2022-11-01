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

    dfsPreOrder() {
        // Create a variable to store the values of nodes visited
        let data = [];
        // Store the root of the BST in a variable called current
        let current = this.root;
        // Write a helper function which accepts a node
        function traverse(node) {
            // Push the value of the node to the variable that stores the value
            data.push(node.value);
            // If the node has a left property, call the
            // helper function with the left property on the node
            if (node.left) traverse(node.left);
            // If the node has a right property, call the
            // helper function with the left property on the node
            if (node.right) traverse(node.right);
        }
        // Invoke the helper function with the current variable
        traverse(current);
        // Return the array of values
        return data;
    }

    dfsPostOrder() {
        // Create a variable to store the values of nodes visited
        let data = [];
        // Store the root of the BST in a variable called current
        let current = this.root;
        // Write a helper function which accepts a node
        function traverse(node) {
            // If the node has a left property, call the
            // helper function with the left property on the node
            if (node.left) traverse(node.left);
            // If the node has a right property, call the
            // helper function with the left property on the node
            if (node.right) traverse(node.right);
            // Push the value of the node to the variable that stores the value
            data.push(node.value);
        }
        // Invoke the helper function with the current variable
        traverse(current);
        // Return the array of values
        return data;
    }

    dfsInOrder() {
        // Create a variable to store the values of nodes visited
        let data = [];
        // Store the root of the BST in a variable called current
        let current = this.root;
        // Write a helper function which accepts a node
        function traverse(node) {
            // If the node has a left property, call the
            // helper function with the left property on the node
            if (node.left) traverse(node.left);
            // Push the value of the node to the variable that stores the value
            data.push(node.value);
            // If the node has a right property, call the
            // helper function with the left property on the node
            if (node.right) traverse(node.right);
        }
        // Invoke the helper function with the current variable
        traverse(current);
        // Return the array of values
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
console.log(tree.dfsPreOrder()); // [ 10, 6, 3, 8, 15, 20 ]
console.log(tree.dfsPostOrder()); // [ 3, 8, 6, 20, 15, 10 ]
console.log(tree.dfsInOrder()); // [ 3, 6, 8, 10, 15, 20 ]