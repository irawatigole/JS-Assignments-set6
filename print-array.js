// Write a JavaScript program which prints the elements of the following array. 
// Note : Use nested for loops.
// Sample array : var a = [[1, 2], [8, 11]];
// Sample Output : 
// row 0
// 1
// 2
// row 1
// 8
// 11


function printArray(a){
if (a.length == 0){
    return 'empty array' ;
}
    var result = '';
for (var i = 0; i<a.length; i++) {
    result = result + 'row ' + i + ' \n';
    console.log(result)
    for (var j=0; j<a[i].length; j++){
        result = result + a[i][j] + '\n';
    }
}
return result;
}
console.log(printArray([[1,2], [8,11]]));