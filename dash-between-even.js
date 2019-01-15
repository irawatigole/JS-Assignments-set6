// Write a JavaScript function which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept putDash(025468) the output should be 0-254-6-8. 

function putDash(num){
	var  result = '';
	for (var i=0; i<num.length; i++){
		if (num[i] % 2 == 0 && num[i+1] % 2 ==0){
			result = result + num[i] + '-';
		} else if (num[i] % 2 ==0 || num[i+1] % 2 == 0){
			result = result + num[i];
		} else {
			result = result + num[i];
		}
	}
	return result;
}
	
console.log(putDash('025468'));
console.log(putDash('5'));


