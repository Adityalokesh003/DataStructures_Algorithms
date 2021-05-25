class Node {
    constructor(value){
        this.value = value;
        this.left  = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }


    //insert

    insert = (value)=>{
        let newNode = new Node(value);
        if(this.root === null){

            this.root = newNode;
            return this;
        }else{
            let currentNode =  this.root;
            while(true){

                if(value < currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this
                    }
                    currentNode = currentNode.left;
               }else{
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this
                    }
                    currentNode = currentNode.right;

               }

            }
          
        } 
    }

    //Lookup

    find = (value)=>{
        if(this.root===null) return null;
        let currentNode = this.root;

        while(currentNode){
            
            if (value === currentNode.value) return currentNode;
            
            else if(value < currentNode.value){
                currentNode = currentNode.left;
                
                
           }else if(value > currentNode.value){
                currentNode = currentNode.right;
           }
        }
        
        return null;

    }


}

module.exports = BinarySearchTree;