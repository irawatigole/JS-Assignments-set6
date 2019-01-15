//Write a function called findUnique which returns the only unique number from an array.

// All numbers in the unsorted array are present twice, except the one you have to find. The numbers are always valid integer values between 1 and 2147483647, so no need for type and error checking. The array contains at least one number and may contain millions of numbers. So make sure your solution is optimized for speed.


//[ 1, 8, 4, 4, 6, 1, 8 ]
function findUnique(a){
for (var i=0; i<a.length; i++){
  if (a.indexOf(a[i]) == a.lastIndexOf(a[i])){
    return a[i];
  }
}
}
console.log(findUnique([ 1, 8, 4, 4, 6, 1, 8 ]));
