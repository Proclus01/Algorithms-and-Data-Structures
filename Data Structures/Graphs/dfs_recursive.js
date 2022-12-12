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

    dfs_recursive(start) {
        // ^ The function should accept a starting node
        const adjacencyList = this.adjacencyList;
        // Create a list to store the end result, to be returned at the very end
        const result = [];
        // Create an object to store visited vertices
        const visited = {};
        // Create a helper function which accepts a vertex
        function dfs(vertex) {
            // The helper function should return early if the vertex is empty
            if (!vertex) return null;
            // The helper function should place the vertex it accepts into the visited object 
            // and push that vertex into the result array.
            visited[vertex] = true;
            result.push(vertex);
            // Loop over all of the values in the adjacencyList for that vertex
            adjacencyList[vertex].forEach(
                neighbour => {
                    // If any of those values have not been visited, 
                    // recursively invoke the helper function with that vertex
                    if (!visited[neighbour]) {
                        return dfs(neighbour);
                    }
                }
            )
        }
        // Invoke the helper function with the starting vertex
        dfs(start);
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

console.log(g.dfs_recursive("A")); // [ 'A', 'B', 'D', 'E', 'C', 'F' ]