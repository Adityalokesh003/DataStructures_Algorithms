const numbers = [
    0, 2, 2, 3,  4,
    5, 7, 8, 9, 10
  ];

const bubbleSort = (array)=>{ // Time O(n^2) Space O(1)
    const length =  array.length;
    

    for (let i = 0; i < array.length; i++) {
        console.log("yeh")
        for (let j = 0; j < array.length; j++) {
            
            if (array[j]>array[j+1]) {
                //Swap
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                
            }
            
        }
        
    }
    return array;
 
}

console.log(bubbleSort(numbers));

//upgrade approach
bubbleSort2 = (array)=>{
    const length =  array.length;
    let swapCount  ;

    while(true){
        swapCount = 0;
        console.log("yeh")

        for (let j = 0; j < array.length; j++) {
            
            if (array[j]>array[j+1]) {
                //Swap
                swapCount++;
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                
            }
            
        }
        //Stop if there are no swaps
        if(swapCount ===0){
            return array;
        }
    }

}

//console.log(bubbleSort2(numbers));




