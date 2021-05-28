const numbers = [
    4,8,2,6,9,10,0,8,4,6
  ];
const insertionSort = (array)=>{ //Time Best Case O(n), Average O(n^2), Worst O(n^2) , Space O(1)

    for (let i = 0; i < array.length; i++) {

        //if array current array item less than first item , move it to start index
        if(array[i]<array[0]){
            array.unshift(array.splice(i,1)[0]);
        }else{
            //Find where the member should go til that i position
            for (let j = 1; j < i; j++) {
                if(array[i] >= array[j-1] && array[i] <= array[j]){
                    array.splice(j,0,array.splice(i,1)[0]);
                }
                
            }
        }
    }
    return array;

}

console.log(insertionSort(numbers));
