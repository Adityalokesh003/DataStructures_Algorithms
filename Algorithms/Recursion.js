// Factorial

const findFactorialRecursively = (integer)=>{ //Time O(n) Space O(1)
    if(!Number.isInteger(integer)) return "Give valid Interger input";
    if(integer===1 || integer === 0){
        return 1;
    }
    if(integer===2) return 2;
    return integer*findFactorialRecursively(integer-1);
}

const findFactorialIteratively = (integer)=>{ //Time O(n) Space O(1)
    if(integer===1 || integer ===0){
        return 1;
    }
    if(integer===2) return 2;
    
    let result = 1;
    for (let index = integer; index > 2 ; index--) {
         result *= index;
        
    }
    return result;

}

// console.log(findFactorialIteratively(2));
// console.log(findFactorialRecursively(2));

//Fibanacci Sequence
const fibanacciRecursive = (index)=>{  //Time O(2^n) Space O(1)
    if(index < 2) return index;
    return fibanacciRecursive(index-1)+fibanacciRecursive(index-2);
}

const fibanacciIterative = (index)=>{ //Time O(n) Space O(1)
    if(index < 2) return index;

    let previousItem = 1;
    let secondPreviousItem = 0;
    let result = previousItem + secondPreviousItem;

    for (let i=2; i<index;i++){
        secondPreviousItem = previousItem;
        previousItem = result;
        result = previousItem + secondPreviousItem;
     }
    return result;

}

// Andre from Udemy approach
const fibanacciIterative2 = (index)=>{ //Time O(n) Space O(n)
    const array = [0,1];

    for(let i =2; i<index+1;i++){
        array.push(array[i-1]+array[i-2]);
    }
    return array[index];
}
console.log( fibanacciIterative2(9));


