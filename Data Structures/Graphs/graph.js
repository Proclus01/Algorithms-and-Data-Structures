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
}

let g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Paris");
g.addVertex("San Francisco")
g.addEdge("Tokyo", "Paris");
g.addEdge("Tokyo", "San Francisco")
console.log(g.adjacencyList) 
g.removeVertex("Paris")
console.log(g.adjacencyList) // { Tokyo: [ 'San Francisco' ], 'San Francisco': [ 'Tokyo' ] }
