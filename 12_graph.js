class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v1) => v1 !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v2) => v2 !== vertex1);
    }
    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]);
        while (this.adjacencyList[vertex].length) {
            const adjVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjVertex);
        }
        delete this.adjacencyList[vertex];
    }
    DFSRecursive(vertex) {
        const result = []
        const visited = {};
        const DFS = (v) => {
            if (!this.adjacencyList[v]) return null;
            visited[v] = true;
            result.push(v);
            for (let vert of this.adjacencyList[v]) {
                if (!visited[vert]) {
                    DFS(vert);
                }
            }
        }
        DFS(vertex);
        return result;
    }
    DFSIterative(vertex) {
        const result = [];
        const visited = {};
        const stack = [];
        if (!this.adjacencyList[vertex]) return result;
        stack.push(vertex);
        visited[vertex] = true;
        while (stack.length) {
            let v = stack.pop();
            result.push(v);
            for (let vert of this.adjacencyList[v]) {
                if (!visited[vert]) {
                    visited[vert] = true;
                    stack.push(vert);
                }
            }
        }
        return result;
    }
    BFS(vertex) {
        const result = [];
        const visited = {};
        const queue = [];
        if (!this.adjacencyList[vertex]) return result;
        queue.push(vertex);
        visited[vertex] = true;
        while (queue.length) {
            let v = queue.shift();
            result.push(v);
            for (let vert of this.adjacencyList[v]) {
                if (!visited[vert]) {
                    visited[vert] = true;
                    queue.push(vert);
                }
            }
        }
        return result;
    }
}
const graph = new Graph();
// graph.addVertex('tokyo');
// graph.addVertex('dallas');
// graph.addVertex('barcelona');
// graph.addVertex('madrid');
// graph.addEdge('tokyo', 'madrid');
// graph.addEdge('tokyo', 'barcelona');
// graph.addEdge('tokyo', 'dallas');
// graph.addEdge('barcelona','madrid');
// graph.removeEdge('tokyo', 'barcelona');
// graph.removeVertex('tokyo');
const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
vertices.forEach((v) => {
    graph.addVertex(v);
});
const edges = [
    ['A', 'B'],
    ['A', 'C'],
    ['B', 'D'],
    ['C', 'E'],
    ['D', 'E'],
    ['D', 'F'],
    ['E', 'F']
]
edges.forEach(([v1, v2]) => graph.addEdge(v1, v2));
console.log(JSON.stringify(graph, null, 2));
console.log('DFS Recursive', graph.DFSRecursive('A'));
console.log('DFS Iterative', graph.DFSIterative('A'));
console.log('BFS', graph.BFS('A'));