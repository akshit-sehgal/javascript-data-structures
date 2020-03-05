class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        const newNode = new Node(val, priority);
        if (!this.values.length) {
            this.values.push(newNode);
        } else {
            this.values.push(newNode);
            let cIndex = this.values.length - 1, pIndex;
            while (cIndex > 0) {
                pIndex = Math.floor((cIndex - 1) / 2);
                if (this.values[pIndex].priority > this.values[cIndex].priority) {
                    const temp = this.values[pIndex];
                    this.values[pIndex] = this.values[cIndex];
                    this.values[cIndex] = temp;
                    cIndex = pIndex;
                }
                else {
                    break;
                }
            }
        }
        return this.values;
    }
    dequeue() {
        if (!this.values.length) return undefined;
        const highestPriority = this.values[0];
        const end = this.values.pop();
        if (!this.values.length) return highestPriority;
        this.values[0] = end;
        let pIndex = 0;
        const node = this.values[0];
        const length = this.values.length;
        while (true) {
            let lcIndex = 2 * pIndex + 1;
            let rcIndex = 2 * pIndex + 2;
            let swapIndex = null;
            if (lcIndex < length) {
                if (this.values[lcIndex].priority < node.priority) {
                    swapIndex = lcIndex;
                }
            }
            if (rcIndex < length) {
                if (
                    (swapIndex == null && this.values[rcIndex].priority < node.priority) ||
                    (swapIndex !== null && this.values[rcIndex].priority < this.values[lcIndex].priority)
                ) {
                    swapIndex = rcIndex;
                }
            }
            if (!swapIndex) break;
            this.values[pIndex] = this.values[swapIndex];
            this.values[swapIndex] = node;
            pIndex = swapIndex;
        }
        return highestPriority;
    }
}
const pq = new PriorityQueue();
pq.enqueue(2, -3);
pq.enqueue(100, -1);
pq.enqueue(3, -2);
console.log('Enqueue', pq.enqueue(20, 0));
pq.dequeue();
// pq.dequeue();
// pq.dequeue();
// pq.dequeue();
console.log('After Dequeue', pq.values);
module.exports = {
    PriorityQueue
}