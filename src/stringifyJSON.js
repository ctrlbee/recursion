// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(input){
  // your code goes here

if(typeof input ==="number"){
	return input+""; 
}

 if(typeof input ==="string"){
	var str = ""; 
	str+='"';
	str+=input; 
	str+='"';
	return str; 
 }

 if(typeof input ==="boolean"){
	return input+""; 
 }

 if(input === null){
 	return null+""; 
 }
  if(input === undefined){
 	return false+""; 
 }


  if(Array.isArray(input)){
  	 var returnString = "";
  	returnString+="[";
  	input.forEach(function(el, i){
  		returnString+=stringifyJSON(el);
  		if(input.length-1 !== i){
  			returnString += ","; 
  		}
  	});
  	returnString+="]";
  	return returnString+"";
  }
 

};

var test1 = 0; 
console.log(JSON.stringify(test1));
console.log(stringifyJSON(test1));
