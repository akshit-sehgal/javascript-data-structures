class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }
    insert(value) {
        this.values.push(value);
        let index = this.values.length - 1;

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.values[index] > this.values[parentIndex]) {
                const temp = this.values[index];
                this.values[index] = this.values[parentIndex];
                this.values[parentIndex] = temp;
                index = parentIndex;
            } else {
                break;
            }
        }
        return this.values;
    }
    extractMax() {
        if (!this.values.length) return undefined;
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length === 0) return max;
        this.values[0] = end;
        let pIndex = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let lcIndex = 2 * pIndex + 1;
            let rcIndex = 2 * pIndex + 2;
            let leftChild, rightChild;
            let swap = null;
            if (lcIndex < length) {
                leftChild = this.values[lcIndex];
                if (leftChild > element) {
                    swap = lcIndex;
                }
            }
            if (rcIndex < length) {
                rightChild = this.values[rcIndex];
                if ((swap == null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
                    swap = rcIndex;
                }
            }
            if (!swap) break;
            this.values[pIndex] = this.values[swap];
            this.values[swap] = element;
            pIndex = swap;
        }
        return max;
    }
}
const heap = new MaxBinaryHeap();
console.log('Insert', heap.insert(55));
console.log('ExtractMax', heap.extractMax());
console.log(heap.values);
