//LinkedList Implementation

const Node =  require("./../Node");

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    //peek
    peek = ()=>{
        return this.first.value;
    }


    enqueue = (value)=>{
        let newNode = new Node(value);
        if(this.isEmpty()){
            this.first = newNode;
            this.last = newNode;
            
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;
        return this;
 
    }

    dequeue = ()=>{
        if(this.isEmpty()){
            return this;
        }

        if(this.length===1){
            this.last = null;
        }
        let nextNode = this.first.next;
        this.first = nextNode;
        this.length--;
        return this;
    }

    printQueue = ()=>{
        let currentNode = this.first;
        while(currentNode){
            console.log("Item " ,currentNode.value);
            currentNode = currentNode.next;
           
        }
    }

    isEmpty = ()=>{
        return this.length===0;
    }
}

module.exports = Queue;