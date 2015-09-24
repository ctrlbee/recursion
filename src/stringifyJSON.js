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

   if(typeof input ==="function"){
    return undefined+""; 
   }

   if(input === null){
   	return null+""; 
   }

  if(input === undefined){
  	return undefined+""; 
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

  if(typeof input ==="object"){
    var returnString = ""; 
    var keyCount = Object.keys(input).length; 
    var counter = 1; 
    returnString += "{";
    for(x in input){
      var key = stringifyJSON(x); 
      var value = stringifyJSON(input[x]); 
      if(value!=='undefined'){
        returnString+= key; 
        returnString+=":";
        returnString+=value; 
        if(counter!==keyCount){
          returnString+=",";  
        }
      }
      counter++; 
    }
    returnString += "}";

    return returnString+""; 
  }

};

var test1 = {
    'functions': function(){},
    'undefined': undefined
  }; 
console.log(JSON.stringify(test1));
console.log(stringifyJSON(test1));
