const Stack =  require("./ArrayStack");

const myStack = new Stack();

myStack.push(5);
myStack.push(15);
console.log( myStack.peek());
myStack.push(999);
console.log(myStack.pop());




