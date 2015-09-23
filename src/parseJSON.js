// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json){
  // your code goes here
   
  console.log("raw " + json); 
  console.log("parsed ", JSON.parse(json));	
  
  //look at first char to determine if array or obj, create empty array or obj 
  //remove fist and last char

  //turn into array, split based on comma

  //if obj: 
  //loop through, determine placement of colon
  //add chars on left to obj[name], chars on right val

  //if arr:
  //loop through, if quotes found, add whole element to return array 
  //if no quotes, assume number, convert to number via Number(x) and add to return array
 

};

var testString1 = '{"foo": ""}'; 
var testString2 = '{"a": "b", "c": "d"}'; 
var testString3 = '["one", "two"]'; 
var testString4 = '[1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999]'; 

parseJSON(testString4);
