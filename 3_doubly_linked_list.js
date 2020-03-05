class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.tail) return;
        const node = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = node.prev;
            this.tail.next = null;
            node.prev = null;
        }
        this.length--;
        return node;
    }
    shift() {
        if (!this.head) return;
        const node = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = node.next;
            this.head.prev = null;
            node.next = null;
        }
        this.length--;
        return node;
    }
    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        const midIndex = this.length / 2;
        let count = 0;
        let temp;
        if (index > midIndex) {
            temp = this.tail;
            count = this.length - 1;
            while (count > index) {
                temp = temp.prev;
                count--;
            }
        }
        else {
            temp = this.head;
            while (count < index) {
                temp = temp.next;
                count++;
            }
        }
        return temp;
    }
    set(index, val) {
        const node = this.get(index);
        if (node) {
            node.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        else if (index === 0) return !!this.unshift(val);
        else if (index === this.length) return !!this.push(val);
        else {
            const previousNode = this.get(index - 1);
            const newNode = new Node(val);
            newNode.next = previousNode.next;
            previousNode.next.prev = newNode;
            previousNode.next = newNode;
            newNode.prev = previousNode;
            this.length++;
            return true;
        }
    }
    remove(index) {
        if (index < 0 || index >= this.length) return null;
        else if (index === 0) return this.shift();
        else if (index === this.length - 1) return this.pop();
        else {
            const node = this.get(index);
            node.prev.next = node.next;
            node.next.prev = node.prev;
            node.next = null;
            node.prev = null;
            this.length--;
            return node;
        }
    }
    traverse() {
        let temp = this.head;
        while (temp) {
            console.log(temp.val);
            temp = temp.next;
        }
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        while (node) {
            const prev = node.prev;
            const next = node.next;
            node.prev = node.next;
            node.next = prev;
            node = next;
        }
        return this;
    }
}
const dLL = new DoublyLinkedList();
console.log('Push', dLL.push(1));
console.log('Push', dLL.push(2));
console.log('Push', dLL.push(3));
console.log('Push', dLL.push(4));
console.log('Push', dLL.push(5));
console.log('Pop', dLL.pop());
// console.log('Pop', dLL.pop());
// console.log('Pop', dLL.pop());
console.log('Shift', dLL.shift());
console.log('Unshift', dLL.unshift(100));

console.log('Get', dLL.get(3));
console.log('Set', dLL.set(1, 45));
console.log('Insert', dLL.insert(4, 90));
console.log('Remove', dLL.remove(2));
dLL.traverse();
dLL.reverse();
dLL.traverse();

