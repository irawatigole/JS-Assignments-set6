

// You are given two strings S1 and S2. You need to find weights of both strings and compare them. The weight of a string can be obtained by adding individual weights of the characters that make the string. The weight of individual characters are the position on which they occur in the English alphabets table; for eg, a has weight 1, z has weight 26.

// Output:

// Print 1 if the weight of the first string is greater. Print 2 if the weight of the second string is greater. Print equal if the weights are equal.

// Example:

// Input 
// 1.
// batman
// superman

// 2.
// manbat
// batman

// Output: 

// 2
// equal 


function strWeight(a,b){
    c = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var sum = 0;
     for (var i=1; i<=26; i++){
        sum1 = sum + c.indexOf(a[i]);
        sum2 = sum + c.indexOf(b[i]);
if (sum1 > sum2){
    return 1;
} else if (sum2 > sum1){
    return 2;
} else if (sum1 == sum2){
    return 'equal';
}
    }
}
console.log(strWeight('superman','batman'));
console.log(strWeight('batman','superman'));
console.log(strWeight('batman','manbat'));
console.log(strWeight('ab','cd'));
