function sum(values) {

  var total = 0;
  for (var i = 0; i < values.length; i++) {
    total = values[i]+total;
  }
  return total;
}

function range (start, end, step){
  if (step == undefined) {var step = 1;}
  var range = [];
  var number = start;

  if(step > 0){
    for (i=0; i <= end-start ; i++){
      range.push(number);
      number=number+step;
      if (number>end) {break}
    }
  }
  else{
    for (i=0; i <= start-end ; i++){
      range.push(number);
      number=number+step;
      if (number<end) {break}
    }
  }
  return range;
}


console.log(sum((range(1, 10))));
