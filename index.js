const LinkedList = require("./LinkedList.js")
//const recurringItem = require("./recurringitem.js")
//console.log(recurringItem([1,2,3,5,5,4]))
const mylinkedList = new LinkedList(1)
mylinkedList.prepend(10)
mylinkedList.append(50)
mylinkedList.prepend(10)
mylinkedList.insert(6,999)
//console.log(mylinkedList.insert(0,444));
mylinkedList.getMyList()
console.log(mylinkedList.remove(-1));
mylinkedList.getMyList();
console.log("Length ",mylinkedList.length);

//
