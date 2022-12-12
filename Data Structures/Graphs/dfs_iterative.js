class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        // Add a key to the adjacency list
        // with the name of the vertix
        // and set its value to be an empty array
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // This is for an undirected graph so we have to link both vertices
    addEdge(vertex1, vertex2) {
        // Accept two vertices as an argument
        // Find in the adjacency list the key of vertex1
        // and push vertex2 into the array
        if (this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1].push(vertex2)
        }
        // Find in the adjacency list the key of vertex2
        // and push vertex1 into the array
        if (this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2].push(vertex1)
        }
    }

    removeEdge(vertex1, vertex2) {
        // Reassign the key of vertex1 to be an array
        // that does not contain vertex2
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            vertex => {
                return vertex !== vertex2
            }
        );
        // Reassign the key of vertex2 to be an array
        // that does not contain vertex1
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            vertex => {
                return vertex !== vertex1
            }
        );
    }

    removeVertex(vertex) {
        // The function should loop as long as there are any other vertices
        // in the adjacency list to remove
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        // Delete the key in the adjacency list for the vertex
        delete this.adjacencyList[vertex];
    }

    dfs_iterative(start) {
        // ^ The function should accept a starting node
        const adjacencyList = this.adjacencyList;
        let currentVertex;
        // Create a stack to help use keep track of vertices (use a list/array)
        const stack = [start]; // and add starting vertex to stack right away
        // Create a list to store the end result, to be returned at the very end
        const result = [];
        // Create an object to store visited vertices
        const visited = {};
        // Add the starting vertex to the stack, and mark it visited
        visited[start] = true;
        // While the stack has something in it:
        while(stack.length) {
            // Make a variable to store what we're popping off
            // Pop the next vertex from the stack
            currentVertex = stack.pop();
            result.push(currentVertex);
            // Iterate over the adjacency list
            // Push all of its neighbors into the stack
            this.adjacencyList[currentVertex].forEach(
                neighbour => {
                    // If that vertex hasn't been visited yet:
                    if (!visited[neighbour]) {
                        // ​Mark it as visited
                        visited[neighbour] = true;
                        // Add it to the result list
                        stack.push(neighbour);
                    }
                }
            )
        }
        // Return the result array
        return result;
    }
}

let g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

console.log(g.dfs_iterative("A")); // [ 'A', 'C', 'E', 'F', 'D', 'B' ]