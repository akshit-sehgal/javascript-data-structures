class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        }
        else {
            let current = this.root;
            while (true) {
                if (newNode.value === current.value) return undefined;
                if (newNode.value > current.value) {
                    if (current.right) {
                        current = current.right;
                    }
                    else {
                        current.right = newNode;
                        break;
                    }
                } else {
                    if (current.left) {
                        current = current.left;
                    }
                    else {
                        current.left = newNode;
                        break;
                    }
                }
            }
        }
        return this;
    }
    find(value) {
        let current = this.root;
        while (true) {
            if (!current) return undefined;
            if (current.value === value) return current;
            else if (value > current.value) {
                current = current.right;
            } else {
                current = current.left;
            }
        }

    }
    BFS() {
        const queue = [];
        const values = [];
        let current = this.root;
        queue.push(this.root);
        while (queue.length && current) {
            current = queue.shift();
            values.push(current.value);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return values;
    }
    DFSpreOrder() {
        const values = [];
        function traverse(node) {
            if (!node) return;
            values.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return values;
    }
    DFSpostOrder() {
        const values = [];
        function traverse(node) {
            if (!node) return;
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            values.push(node.value);
        }
        traverse(this.root);
        return values;
    }
    DFSinOrder() {
        const values = [];
        function traverse(node) {
            if (!node) return;
            if (node.left) traverse(node.left);
            values.push(node.value);
            if (node.right) traverse(node.right);
            
        }
        traverse(this.root);
        return values;
    }
}

let tree = new BinarySearchTree();
const nodes = [10, 5, 13, 2, 7, 11, 16]
for (let value of nodes) {
    tree.insert(value);
}
console.log('Find', JSON.stringify(tree.find(5), null, 2));
console.log('BFS - Level Order', tree.BFS());
console.log('DFS - Pre Order', tree.DFSpreOrder());
console.log('DFS - Post Order', tree.DFSpostOrder());
console.log('DFS - In Order', tree.DFSinOrder());