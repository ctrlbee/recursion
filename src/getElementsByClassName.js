// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var arr = []; 

  function parser(el){
    //add base case 
    if(el.children.length===0){
      return; 
    }

  	for(var i=0; i<el.children.length; i++){
  		if(el.children[i].className.indexOf(className) !== -1){
  			arr.push(el.children[i]); 
  		}
      parser(el.children[i]); 
  	}
  }

  parser(document);
  return arr; 
};


$(document).ready(function(){
	console.log(getElementsByClassName('targetClassName')); 
}); 






