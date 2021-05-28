const BinarySearchTree = require("./BinarySearchTree");

let myBST = new BinarySearchTree();
myBST.insert(15)
myBST.insert(18)
myBST.insert(11)
myBST.insert(9)
myBST.insert(19)
myBST.insert(4)
myBST.insert(21)
myBST.insert(2)
myBST.insert(21)


console.log(JSON.stringify(myBST));

//console.log(myBST.find(2));
console.log(myBST.breadthFirstSearchRecursive([myBST.root],[]));
//console.log(myBST.breadthFirstSearch());


