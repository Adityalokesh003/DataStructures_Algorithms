const numbers = [
    4,8,2,6,9,10,0
  ];
const mergeSort = (array)=>{ // Time O(nlogn) , Space O(n)
    const length = array.length;

    if( length===1){
        return array;
    }

    const middle = Math.floor(length/2);

    const left = array.slice(0,middle);
    const right = array.slice(middle);

    return merge( mergeSort(left), mergeSort(right));

}


const merge = (left, right)=>{
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length){
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        }else{
            result.push(right[rightIndex]);
            rightIndex++;
        }
        
    }
    
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)); // to include last item fromleft or right when while breaks if leftIndex or rightIndex >=left.length or right.length
}

console.log(mergeSort(numbers));
 

/*A sorting algorithm is said to be stable if two objects with equal keys appear in the same order in 
sorted output as they appear in the input array to be sorted.
*/