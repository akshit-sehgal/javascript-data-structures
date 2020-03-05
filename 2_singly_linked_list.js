class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
// let first = new Node("one");
// first.next = new Node("two");
// console.log(JSON.stringify(first, null, 2));
// {
//     "val": "one",
//     "next": {
//       "val": "two",
//       "next": null
//     }
// }
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
        return 'END';
    }
    pop() {
        if (!this.head) return;
        let current = this.head;
        let pre = current;
        while (current.next) {
            pre = current;
            current = current.next;
        }
        const node = this.tail;
        pre.next = null;
        this.tail = pre;
        this.length--;
        if (!this.length) {
            this.head = null;
            this.tail = null;
        }
        return node;
    }
    shift() {
        if (!this.head) return;
        const preHead = this.head;
        this.head = this.head.next;
        this.length--;
        if (!this.length) {
            this.tail = null;
        }
        return preHead;
    }
    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return;
        let currentIndex = 0;
        let node = this.head;
        while (currentIndex < index) {
            node = node.next;
            currentIndex++;
        }
        return node;
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
        else if (index === 0) {
            return !!this.unshift(val);
        } else if (index === this.length) {
            return !!this.push(val);
        } else {
            const previousNode = this.get(index - 1);
            const newNode = new Node(val);
            newNode.next = previousNode.next;
            previousNode.next = newNode;
            this.length++;
            return true;
        }
    }
    remove(index) {
        if (index === 0) return this.shift();
        else if (index === this.length - 1) return this.pop();
        else if (index < 0 || index >= this.length) return;
        else {
            const previousNode = this.get(index - 1);
            const currentNode = previousNode.next;
            previousNode.next = currentNode.next;
            this.length--;
            return currentNode;
        }
    }
    reverse() {
        let next = null, prev = null, current = this.head;
        this.head = this.tail;
        this.tail = current;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return this;
    }
}
const list = new SinglyLinkedList();
console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));
list.traverse();
console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
console.log(list.shift());
// console.log(list.shift());
console.log(list);
console.log('Unshift', list.unshift(12));
console.log('Get', list.get(1));
console.log('Set', list.set(1, 10));
console.log('Insert', list.insert(2, 90));
console.log('Remove', list.remove(0));
list.traverse()
console.log(list.reverse());
list.traverse();
