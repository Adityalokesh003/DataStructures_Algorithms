const Node = require("./Node.js")

class LinkedList {

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

     if(index >= this.length || index < 0) return undefined;

     if(index === this.length-1) return this.append(value);

     if(index === 0) return this.prepend(value);
     
     let currentNode = this.traverseToIndex(index-1)
     let nextNode = currentNode.next;
     currentNode.next = newNode;
     newNode.next = nextNode
     this.length++;

     return newNode.value;
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
   }
  
}

module.exports = LinkedList