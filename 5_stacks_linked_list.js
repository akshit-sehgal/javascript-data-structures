class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            newNode.next = this.first;
            this.first = newNode;
        }
        return ++this.size;
    }
    pop() {
        if (!this.first) return null;
        const node = this.first;
        if (this.size === 1)
            this.last = null;
        this.first = node.next;
        this.size--;
        return node;
    }
}
const stack = new Stack();
console.log(stack.push(12));
console.log(stack.push(22));
console.log(stack.push(42));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);