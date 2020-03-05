let stack = [];
stack.push(10);
stack.push(12);
console.log(stack.pop());
console.log(stack);


//Less Efficient

let stack2 = [];
stack2.unshift(1);
stack2.unshift(2);
console.log(stack2.shift());
console.log(stack2);