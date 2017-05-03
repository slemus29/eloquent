function reverseArrayInPlace(array) {
  reverse= array.reverse();
  return reverse;
}

function reverseArray(array){
  var newarray= [];
  length = array.length;
  for(i=0; i<length; i++){    
    var last = array.pop();
    newarray.push(last);
  }
  return newarray;
}

console.log(reverseArray(["A",2,3]))