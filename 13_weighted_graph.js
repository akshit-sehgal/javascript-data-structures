const { PriorityQueue } = require('./10_priority_queue');
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(v) {
        if (!this.adjacencyList[v])
            this.adjacencyList[v] = [];
    }
    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({ node: v2, weight });
        this.adjacencyList[v2].push({ node: v1, weight });
    }
    dijkstra(sv, ev) {
        if (!this.adjacencyList[sv] || !this.adjacencyList[ev]) return;
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;
        let result = [];
        for (let v in this.adjacencyList) {
            if (v === sv) {
                distances[v] = 0;
                nodes.enqueue(v, 0);
            }
            else {
                distances[v] = Infinity;
                nodes.enqueue(v, Infinity);
            }
            previous[v] = null;
        }
        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === ev) {
                while (previous[smallest]) {
                    result.push(smallest);
                    smallest = previous[smallest];
                }
                result.push(sv);
                console.log('Distance',distances[ev]);
                break;
            }
            // if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    let candidate = distances[smallest] + nextNode.weight;
                    if (candidate < distances[nextNode.node]) {
                        distances[nextNode.node] = candidate;
                        previous[nextNode.node] = smallest;
                        nodes.enqueue(nextNode.node, candidate);
                    }
                }
            // }

        }
        return result.reverse();
    }
}
const graph = new WeightedGraph();
const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
vertices.forEach((vertex) => graph.addVertex(vertex));
const edges = [
    ['A', 'B', 4],
    ['A', 'C', 2],
    ['B', 'E', 3],
    ['C', 'D', 2],
    ['C', 'F', 4],
    ['D', 'E', 3],
    ['D', 'F', 1],
    ['E', 'F', 1]
]
edges.forEach(([v1, v2, w]) => graph.addEdge(v1, v2, w));
console.log(JSON.stringify(graph, null, 2));

console.log(graph.dijkstra('A', 'E'));