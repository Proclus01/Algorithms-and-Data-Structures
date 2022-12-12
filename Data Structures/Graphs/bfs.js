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

    bfs(start) {
        // ^ This function should accept a starting vertex
        // Create a queue (you can use an array) and place the starting vertex in it
        const queue = [start];
        let currentVertex;
        // Create an array to store the nodes visited
        const result = [];
        // Create an object to store nodes visited
        const visited = {};
        // Mark the starting vertex as visited
        visited[start] = true;
        // Loop as long as there is anything in the queue
        while (queue.length) {
            // Remove the first vertex from the queue and push it into the array that stores nodes visited
            currentVertex = queue.shift();
            result.push(currentVertex);
            // Loop over each vertex in the adjacency list for the vertex you are visiting.
            this.adjacencyList[currentVertex].forEach(
                neighbour => {
                    // If it is not inside the object that stores nodes visited, 
                    // mark it as visited and enqueue that vertex
                    if (!visited[neighbour]) {
                        visited[neighbour] = true;
                        queue.push(neighbour);
                    }
                }
            )
        }
        // Once you have finished looping, return the array of visited nodes
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
g.addEdge("A","E");
g.addEdge("B","D");
g.addEdge("B","C");
g.addEdge("C","D");
g.addEdge("D","E");
g.addEdge("D","F");
g.addEdge("E","F");

console.log(g.bfs("A")); // [ 'A', 'B', 'E', 'D', 'C', 'F' ]