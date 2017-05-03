function level(n) {
  var x = "";
  for (var i = 1; i <= n; i++) {
    for (var j = 0; j< i; j++) {
      x += "#";
    }
    x+="\n";
  }
  return x;
}


console.log(level(7));

var piramideDe = function(ladrillo){
  return function (n) {
    var x = "";
    for (var i = 1; i <= n; i++) {
      for (var j = 0; j< i; j++) {
        x += ladrillo;
      }
      x+="\n";
    }
    return x;
  }  
}

var p1 = piramideDe(2);
var p2 = piramideDe("@");
var p3 = piramideDe("santy");

console.log(p3(7));