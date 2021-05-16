// const findRecurringItem = itemList =>{
//   const uniqElementList = [];
//  for(i=0; i< itemList.length;i++){
    
//     if(uniqElementList.length!==0){
//       let foundElement = uniqElementList.find(item => item === itemList[i]);
//       if(foundElement){
//         return foundElement;
//       }
//     }
//     uniqElementList.push(itemList[i]);
// }
  
// }//Time O(n2) Space O(1)


const findRecurringItem = itemList =>{
  const uniqElementList = new Map();
 for(i=0; i< itemList.length;i++){
    
    if(uniqElementList.size!==0){
      let foundElement = uniqElementList.get(itemList[i]);
      if(foundElement){
        return foundElement;
      }
    }
    uniqElementList.set(itemList[i],itemList[i]);
}
return ;
  
}// Time O(n) Space O(n)
module.exports= findRecurringItem;
