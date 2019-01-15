//Write a simple JavaScript Function to join all elements of the following array into a string. 
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// joinArray(myColor,",");
// joinArray(myColor,"+");


// Expected Output : 
// "Red,Green,White,Black"
// "Red+Green+White+Black"


function joinArray(arr,b){
 result = arr.join(b);
 console.log(result)
 return result.toString();
}
console.log(joinArray(["Red", "Green", "White", "Black"], ","));
console.log(joinArray(["Red", "Green", "White", "Black"], "+"));