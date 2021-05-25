const Node = require("../Node.js.js")

class SinglyLinkedList {

  constructor(value){

    this.head = {
      value : value,
       next : null 
    }
    this.tail =  this.head;
    this.length = 1
  }
//Add at head
   prepend =  (value)=>{
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length ++;
    return value;
   } 
  //Add at tail 
   append = (value)=>{

     let newNode = new Node(value);

     this.tail.next = newNode;
     this.tail = newNode;
      
     this.length ++;
     return value;
   }
//traverse to node at a index
   traverseToIndex = (index)=>{
     let currentNode  = this.head;
     for(let i=0; i < index; i++){
        currentNode =  currentNode.next;
     }
     return currentNode
   }

//insert node at given index
   insert = (index,value)=>{
     let newNode  = new Node(value);

     if(index > this.length || index < 0) return undefined;

     if(index === this.length) return this.append(value);

     if(index === 0) return this.prepend(value);
     
     let currentNode = this.traverseToIndex(index-1)
     let nextNode = currentNode.next;
     currentNode.next = newNode;
     newNode.next = nextNode
     this.length++;

     return newNode.value;
   }

   //Remove At given index
   remove = (index)=>{
    if(index >= this.length || index < 0) return undefined;

    if(index === this.length-1) return this.pop(index);

    if(index === 0) return this.removeHeadNode(index);


     let previousNode = this.traverseToIndex(index-1);
     let nodeToBeRemoved = previousNode.next;
     let nextNode = nodeToBeRemoved.next;
     previousNode.next = nextNode;
     this.length--;
     return nodeToBeRemoved.value;

   }

   //pop
   pop = ()=>{
    //console.log("tail head")

     let previousNode  =  this.traverseToIndex(this.length-2);
     let nodeToBeRemoved = previousNode.next;
     previousNode.next = null;
     this.tail = previousNode;
     this.length--;
     return nodeToBeRemoved.value;
   }

   //removeHeadNode
   removeHeadNode = ()=>{
    //console.log("remove head")
    let headNodeToBeRemoved  =  this.head;
    this.head = headNodeToBeRemoved.next;
    this.length--;
    return headNodeToBeRemoved.value;
   }

   //reversing a LinkedList
   reverse = ()=>{
     if(this.length===1) return this.head;

     let first =  this.head;
     this.tail = this.head;
     let second = first.next;

     while(second){
       let temp = second.next;

       second.next = first;
       first = second;
       second  = temp;
     }

     this.head.next = null;
     this.head = first
     return this;
   }
   
   //getMyList
   getMyList = ()=>{
     let myNode = this.head
     for(let i = 1; i <= this.length;i++){
      console.log(i," ITEM ", myNode.value );
      if(i===this.length){
        
         break;
      }
      myNode = myNode.next
      
       
     }
     return this;
   }
  
}

module.exports = SinglyLinkedList