function dosVeces(fn){
  fn();
  fn();
}

var hola = function(){
  console.log("hola santy");
}

dosVeces(hola);


function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var twice = multiplier(2);
console.log(twice(9));


var diez = function (number){
  return number*10;
}

console.log(diez(2));

var diezClosure = multiplier(10);

console.log(diezClosure(2));