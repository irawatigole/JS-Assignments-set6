// Write a JavaScript function to remove a specific element from an array. 

// Test data :
// console.log(removeArrayElements([2, 5, 9, 6], 5));
// output - [2, 9, 6]


function removeArrayElement(arr,num) {
var index = arr.indexOf(num);
if (index >= 0){
 arr.splice(index,1);
}
return arr;
}
 console.log(removeArrayElement([2, 5, 9, 6], 5)); 
 console.log(removeArrayElement([2, 5, 9, 6], 5)); 