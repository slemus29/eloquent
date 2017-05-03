function countChar(s, l){
  function countBS(s){
  
    var counter = 0;
    for (var i=0; i< s.length; i++){
      var letter = s.charAt(i);
      if(s.charAt(i) == l){
       counter++;
      }
    }
    return counter;
  }
}

function countBS(s){ 
  return countChar(s, "B");
}


console.log(countBS("BBC"));
console.log(countChar("kakkerlak", "k"));





// function countBS(s){
  
  
//   var counter = 0;
//   for (var i=0; i< s.length; i++){
//     var letter = s.charAt(i);
//     if(s.charAt(i) == "B"){
//      counter++;
//     }
//   }
//   return counter;
// }
    
// function countChar(stri, l){

// }

//  console.log(countBS("ABBBBBC"));
//  console.log(countChar("kakkerlak", "k"));
//  //console.log("BBB".charAt(1));
