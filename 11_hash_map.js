// Simple Hash Function
function hash(word, size) {
    let total = 0;
    for (let char of word) {
        total += char.charCodeAt(0) - 96;
        total %= size;
    }
    return total;
}

// Modified Hash Function
function hashModified(key, size) {
    let total = 0;
    let FACTOR = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * FACTOR + value) % size;
    }
    return total;
}

// console.log(hash('cyan', 10));
// console.log(hashModified('cyan',13));

class HashTable {
    constructor(size = 5) {
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        let FACTOR = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * FACTOR + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value) {
        const index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        // add warning for duplicate key
        this.keyMap[index].push([key, value]);
        return this.keyMap;
    }
    get(key) {
        const index = this._hash(key);
        if (!this.keyMap[index]) return undefined;
        for (let [k, v] of this.keyMap[index]) {
            if (k === key) {
                return v;
            }
        }
        return undefined;
    }
    keys() {
        let keys = [];
        for (let arr of this.keyMap) {
            if (!arr) continue;
            for (let [key, value] of arr) {
                keys.push(key);
            }
        }
        return keys;
    }
    values() {
        let values = [];
        for (let arr of this.keyMap) {
            if (!arr) continue;
            for (let [key, value] of arr) {
                if(!values.includes(value))
                values.push(value);
            }
        }
        return values;
    }
}

const hashTable = new HashTable();
hashTable.set('pnk', 10);
console.log('set', hashTable.set('blue', 10));
console.log('get', hashTable.get('blue'));
console.log('values', hashTable.values());
console.log('keys', hashTable.keys());