const numbers = [
    1,2,6,7,8,1,11,0,9,3,4,5
  ];
const selectionSort = (array)=>{


    for (let i = 0; i < array.length-1; i++) {
        let leastElementIndex = i;
        for (let j = i; j < array.length; j++) {
            if(array[j]< array[leastElementIndex]){
                leastElementIndex = j;
            }
            console.log("Steps "+i+" "+j+" =>"+array+ " Least Item "+array[leastElementIndex]);
            
            
        }

        let temp = array[i];
        array[i] = array[leastElementIndex];
        array[leastElementIndex] = temp;
        
    }

    return array;

}

console.log(selectionSort(numbers));
;